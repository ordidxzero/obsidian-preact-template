# Obsidian Preact Template

ESBuild + Preact + TailwindCSS + Typescript 조합으로 옵시디언 플러그인을 개발할 수 있는 템플릿입니다.

## Usage

1. `yarn set version stable`
2. `yarn`
3. `yarn plugin import typescript`
4. `yarn dlx @yarnpkg/sdks vscode`
5. `shift + cmd + p`를 눌러서 `Typescript: Select Typescript Version...`를 선택 후 `x.x.x-sdk`로 설정

## Miscellaneous
1. `tailwind.config.cjs`에 있는 `PLUGIN_TW_PREFIX`를 꼭 고유한 문자열로 만들어주세요! 다른 플러그인과 겹치지 않게 하기 위해서 반드시 필요합니다.
2. 플러그인을 개발하다가 className을 변경하는 경우 반드시 `yarn tw`를 실행해야합니다.