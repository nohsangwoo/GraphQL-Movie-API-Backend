#0.1 yarn add graphql-yoga
#0.4

npm i nodemon -D
npm i @babel/cli -D
npm i @babel/core -D
npm i @babel/node -D
npm i @babel/preset-env -D

yarn 으로 설치하고 실행해됨 (package.json 설정 참조)

#.babelrc 파일 만들고
{
"presets": ["env", "stage-3"]
}
을 내용으로 넣음

# graphql 의 작동방식을 다시한번 recap resolvers와 schema의 개념을 잡음

# YTS API로 DB불러올꺼임

yarn add node-fetch
