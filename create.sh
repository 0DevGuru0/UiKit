
echo -e '\033[1;34mWhat is the name of the component ?\033[0m'
read componentName

while [[ -z $componentName ]] || [[ ! $componentName =~ ^[a-zA-Z0-9]+$ ]]
do
    echo -e '\033[1;31mError: Please enter a valid name: \033[0m'
    read componentName
done

echo -e '\033[1;34mWhat will the starting version going to be ?\033[0m'
read ver

while ! [[ $ver =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]
do
    echo -e '\033[1;31mInvalid version number\033[0m'
    echo -e '\033[1mWhat will the starting version going to be ?\033[0m'
    read ver
done

echo -e '\033[1;34mWhat kind of component is this ?\033[0m'
echo -e '\033[1m1. Atom\033[0m'
echo -e '\033[1m2. Molecule\033[0m'
echo -e '\033[1m3. Organism\033[0m'
echo -e '\033[1m4. Template\033[0m'
read componentType

if [ $componentType -eq 1 ]
then
    cd components/atoms
elif [ $componentType -eq 2 ]
then
    cd components/molecules
elif [ $componentType -eq 3 ]
then
    cd components/organisms
elif [ $componentType -eq 4 ]
then
    cd components/templates
fi

componentNameLowerCase=$(echo $componentName | tr '[:upper:]' '[:lower:]')

mkdir $componentNameLowerCase
cd $componentNameLowerCase

cat > package.json <<EOF
{
  "name": "@avidkit/${componentNameLowerCase}",
  "version": "$ver",
  "main": "./dist/cjs/index.js",
  "module": "./dist/esm/index.js",
  "typescript-main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "build": "build-package"
  },
  "peerDependencies": {
    "@swc/helpers": "^0.4.11",
    "@types/styled-components": "^5.1.15",
    "styled-components": "^5.3.6",
    "@mui/material": "^5.10.16",
    "polished": "^4.1.3",
    "react": "^18.2.0"
  },
  "devDependencies": {
    "@avidkit/builder": "workspace:*",
    "@swc/helpers": "^0.4.11",
    "@types/styled-components": "^5.1.15",
    "styled-components": "^5.3.6",
    "@mui/material": "^5.10.16",
    "@types/react": "^18.8.35",
    "polished": "^4.1.3",
    "react": "^18.2.0"
  },
  "files": [
    "src",
    "dist",
    "CHANGELOG.md"
  ],
  "repository": "https://gitlab.com/avidarvand/avidkit",
  "publishConfig": {
    "access": "restricted",
    "@avidkit:registry": "https://gitlab.com/api/v4/projects/30727907/packages/npm/"
  },
  "sideEffects": false
}

EOF

mkdir src
cd src

cat > index.ts <<EOF
export { $componentName } from './$componentName';
export type { ${componentName}Props } from './$componentName';
EOF

cat > $componentName.tsx <<EOF
import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ${componentName}Props {
  children?: ReactNode;
}

export const ${componentName} = (props: ${componentName}Props) => {
  return <Container>This is a Template</Container>;
};

const Container = styled.div``;
EOF

cat > $componentName.stories.tsx <<EOF
import { StoryFC } from '\$storybook/StoryFC';
import { ${componentName}, ${componentName}Props } from './${componentName}';

export default {
  title: 'Atoms / ${componentName}',
  component: ${componentName},
  parameters: { background: { noPadding: false } },
};

export const ${componentName}Cmp: StoryFC<${componentName}Props> = (args) => {
  return <${componentName} {...args} />;
};

${componentName}Cmp.args = {};
EOF
