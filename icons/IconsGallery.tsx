import { FC, useState } from 'react';

import { Input } from '@avidkit/input';
import { CheckBox } from '@avidkit/checkbox';
import { camelCase, kebabCase } from 'lodash';
import styled, { css } from 'styled-components';

const iconSize = 60;
const assetsDir = '/icons/assets';

const searchIcons = (icons: IconDescriptor[], search: string): any[] => {
  return icons.filter((icon) =>
    icon.fileName.toLowerCase().includes(search.toLowerCase()),
  );
};

interface IconDescriptor {
  filePath: string;
  fileName: string;
  module: any;
}

const req = require.context('./src', true, /\.tsx$/);

export const IconsGallery: FC = () => {
  const icons: IconDescriptor[] = req.keys().map((key) => ({
    filePath: key.match(/\.\/(.*)/)![1],
    fileName: key.match(/\.\/(.*)\./)![1],
    module: req(key).default,
  }));

  const [changeColorByFill, setChangeColorByFill] = useState(false);
  const [changeColorByTextColor, setChangeColorByTextColor] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const onSearch = (val: any) => {
    setSearchTerm(val);
  };

  return (
    <>
      <FormContainer>
        <Input
          key={'input'}
          onChange={onSearch}
          value={searchTerm}
          placeholder={'search in icons'}
        />
        <CheckBox
          key="checkbox"
          id="id"
          label="Color By Fill"
          onChange={() => setChangeColorByFill(!changeColorByFill)}
          isChecked={changeColorByFill}
        />
        <CheckBox
          key="checkbox2"
          id="id"
          label="Color By Color Attribute"
          onChange={() => setChangeColorByTextColor(!changeColorByTextColor)}
          isChecked={changeColorByTextColor}
        />
      </FormContainer>
      <Container>
        {searchIcons(icons, searchTerm).map((ic) => {
          const IconComponent = ic.module as React.FC<React.SVGProps<SVGSVGElement>>;
          const link = `vscode://file${process.env.PROJECT_ROOT_PATH?.replaceAll(
            '"',
            '',
          )}${assetsDir}/${getSvgFilePath(ic.filePath)}`;

          return (
            <IconContainer href={link} title={ic.filePath} key={ic.filePath}>
              <Icon
                $colorizeByFill={changeColorByFill}
                $colorizeByColor={changeColorByTextColor}
              >
                <IconComponent style={{ width: iconSize, height: iconSize }} />
              </Icon>
            </IconContainer>
          );
        })}
      </Container>
    </>
  );
};

const svgsReq = require.context('./assets', true, /\.svg$/);
const svgFiles = svgsReq.keys().map((key) => key.match(/\.\/(.*)/)![1]);
const getSvgFilePath = (filePath: string) => {
  return svgFiles.find(
    (file) =>
      file === filePath ||
      file === filePath.toLowerCase() ||
      file === `${camelCase(filePath.replace('.tsx', ''))}.svg` ||
      file === `${kebabCase(filePath.replace('.tsx', ''))}.svg`,
  );
};

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 10px;
`;

const IconContainer = styled.a`
  position: relative;
  cursor: pointer;
  padding: 30px;
`;

interface IconProps {
  $colorizeByFill: boolean;
  $colorizeByColor: boolean;
}

const Icon = styled.div<IconProps>`
  height: ${iconSize}px;
  width: ${iconSize}px;

  ${({ $colorizeByColor }) =>
    $colorizeByColor &&
    css`
      color: ${({ theme }) => theme.palette.primary.main};
    `}

  ${({ $colorizeByFill }) =>
    $colorizeByFill &&
    css`
      g,
      rect,
      path,
      use {
        fill: ${({ theme }) => theme.palette.primary.main};
      }
    `}
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
`;
