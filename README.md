# typechain
blockchain with Typescript. this is for practicing typescript

## pakage.json
1. yarn start
tsc를 하고 index.js를 실행하는 두가지 작업을 한다.
```json  
"scripts": {
"start": "node index.js",
"prestart" : "tsc"
}
```
## tsconfig.json
Typescript에게 어떻게 javascript로 변환하는 지 알려주면서 몇몇 옵션을 준다.
1. module : commonjs
node.js를 평범하게 사용하고 다양한 걸 import 하거나 export할 수 있게 만들어 준다.
2. target : ES2015
어떤 버전의 javascript로 컴파일 되고 싶은지 적는 거다.
3. include
컴파일 과정에서 포함될 파일의 배열을 적으면 된다.

## $tsc
node.js는 typescript를 이해하지 못하기 때문에 일반적인 javascript 코드로 컴파일 하는 작업이 필요하다.
tsc는 index.ts 파일에 있는 코드를 컴파일 해서 index.js랑 index.js.map을 만들어 준다.
