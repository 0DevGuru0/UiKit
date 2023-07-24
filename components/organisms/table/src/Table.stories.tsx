import { useState } from 'react';
import { StoryFC } from '$storybook/StoryFC';

import {
  Table,
  TableProps,
  Pagination,
  Filter,
  initFilterContext,
  IFilterContext,
  FilterContext,
} from './index';
import { convertToTableItems } from './mock/convertToTableItems';
import { mockData, mockDataLernito } from './mock/mockData';
import { itemTypesDefinitions } from './mock/itemType';
import { sampleFilterConfig } from './Table/Filter/filterConfig';
import styled from 'styled-components';
import { atom, useAtomValue } from 'jotai';
import { mockFilterItems } from './mock/mockFilterItems';

export default {
  title: 'Organisms / Table',
  component: Table,
};

const initValue: any = {
  searchPhrase: 'healing',
};

const filtersAtomTableWithInitFilterValue = atom(initValue);
const sortByAtomTableWithInitFilterValue = atom('Title A to Z');
const initFilterTableWithInitFilterValue: IFilterContext = {
  ...initFilterContext,
  variant: 'WithSort',
  config: sampleFilterConfig,
  filtersAtom: filtersAtomTableWithInitFilterValue,
  sortByAtom: sortByAtomTableWithInitFilterValue,
};

export const TableWithInitFilterValue: StoryFC<
  TableProps<typeof itemTypesDefinitions>
> = () => {
  const filterValue = useAtomValue(filtersAtomTableWithInitFilterValue);
  const sortBy = useAtomValue(sortByAtomTableWithInitFilterValue);

  const filteredData = mockFilterItems(mockData, { ...filterValue, sortBy });

  const data = convertToTableItems(filteredData);

  data.forEach((item, index) => {
    item.title = {
      ...item.title,
      index,
      isChecked: false,
      onToggle: () => null,
    };
  });

  return (
    <>
      <FilterContext.Provider value={initFilterTableWithInitFilterValue}>
        <Filter />
      </FilterContext.Provider>
      <Table
        rowsHeight="160px"
        onRowClick={(id: number) => console.log(id)}
        definitions={itemTypesDefinitions}
        items={data}
      />
      <Pagination
        currentPage={1}
        onPageChange={(currentPage) => console.log(currentPage)}
        pageSize={2}
        totalCount={data.length}
      />
    </>
  );
};

const filtersAtomTableComponentIknito = atom({});
const sortByAtomTableComponentIknito = atom('Title A to Z');
const initFilterTableComponentIknito: IFilterContext = {
  ...initFilterContext,
  variant: 'WithSort',
  config: sampleFilterConfig,
  sortByAtom: sortByAtomTableComponentIknito,
  filtersAtom: filtersAtomTableComponentIknito,
};

export const TableComponentIknito: StoryFC<
  TableProps<typeof itemTypesDefinitions>
> = () => {
  const [togglers, setTogglers] = useState({});
  const filterValue = useAtomValue(filtersAtomTableComponentIknito);
  const sortBy = useAtomValue(sortByAtomTableComponentIknito);

  const filteredData = mockFilterItems(mockData, { ...filterValue, sortBy });

  const data = convertToTableItems(filteredData);

  data.forEach((item, index) => {
    item.title = {
      ...item.title,
      index,
      isChecked: togglers[item.title.id],
      onToggle(newState: boolean, taskKey: string) {
        setTogglers({ ...togglers, [taskKey]: newState });
      },
    };
  });

  return (
    <>
      <FilterContext.Provider value={initFilterTableComponentIknito}>
        <Filter />
      </FilterContext.Provider>
      <Table
        rowsHeight="160px"
        onRowClick={(id: number) => console.log(id)}
        definitions={itemTypesDefinitions}
        items={data}
      />
      <Pagination
        currentPage={1}
        onPageChange={(currentPage) => console.log(currentPage)}
        pageSize={2}
        totalCount={data.length}
      />
    </>
  );
};

export const TableComponentLernito: StoryFC<
  TableProps<typeof itemTypesDefinitions>
> = () => {
  const [state, setState] = useState(mockDataLernito);

  const SampleFirstRowRenderer = (props: any) => {
    return (
      <SampleLernitoCell
        onClick={() => {
          const clickRowIndex = state.findIndex((item) => item.name._id === props._id);
          const newState = [...state];
          newState[clickRowIndex].name.isChecked =
            !newState[clickRowIndex].name.isChecked;
          setState(newState);
        }}
      >
        {props.isChecked ? '✓ ' : '✗ '}
        {props.text}
      </SampleLernitoCell>
    );
  };

  const SampleRenderer = (props: any) => {
    return (
      <SampleLernitoCell onClick={() => console.log(props)}>
        {props.text}
      </SampleLernitoCell>
    );
  };
  const SampleArrayRenderer = (props: any) => {
    return <SampleLernitoCell>{props.list.join(', ')}</SampleLernitoCell>;
  };
  const SampleBoolRenderer = (props: any) => {
    return <SampleLernitoCell>{props.state ? '✓' : '✗'}</SampleLernitoCell>;
  };

  const itemTypesDefinitionsLernito = [
    { width: '306px', column: 'name', label: 'Name', renderer: SampleFirstRowRenderer },
    {
      width: '306px',
      column: 'keywords',
      label: 'Keywords',
      renderer: SampleArrayRenderer,
    },
    { width: '306px', column: 'shape', label: 'Shape', renderer: SampleRenderer },
    { width: '120px', column: 'isAdmin', label: 'Admin', renderer: SampleBoolRenderer },
    { width: '120px', column: 'color', label: 'Developer', renderer: SampleRenderer },
  ];

  return (
    <TableContainer>
      <Table
        rowsHeight="112px"
        definitions={itemTypesDefinitionsLernito}
        items={state}
        variant={'lernito'}
        isLastFixed={false}
        infinite={true}
        hasNextPage={true}
        onFetchMore={() => {
          console.log('fetching more');
        }}
      />
    </TableContainer>
  );
};

const SampleLernitoCell = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TableContainer = styled.div`
  width: 100%;
  height: 500px !important;
`;
