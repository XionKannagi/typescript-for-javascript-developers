# TypeScriptの導入
----
このプロジェクトは以下のudemy教材で行ったtypescriptの導入に関する内容で記載しています。  
 - **ハンズオンで学ぶ TypeScript - JavaScript エンジニアのための TypeScript徹底入門**  

## Table of Contents
 - [1.Nodeインストール](#1.Nodeインストール)
 - [2.package.jsonの作成](#2.package.jsonの作成)
 - [3.Typescriptパッケージの導入](#3.Typescriptパッケージの導入)
 - [4.JavaScriptへコンパイルする。](#4.JavaScriptへコンパイルする。)
 - [5.ts-nodeのインストール](#5.ts-nodeのインストール)
 - [6.ts-node-devのインストール](#6.ts-node-devのインストール)
   - [6.1インストール](#6.1インストール)
   - [6.2npmタスクに登録する](#6.2npmタスクに登録する)


## 1.Nodeインストール
----
anyenv + nodenv環境での構築を行い`npmコマンド`を利用できるようにしていることが前提なので省略。


## 2.package.jsonの作成
----
terminalでカレントディレクトリへ移動し`npm init -y`を実行する。　　
```
% cd path/to/current/directory
% npm init -y
Wrote to path/to/current/directory/typescript-for-javascript-developers/package.json:

{
  "name": "typescript-for-javascript-developers",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/XionKannagi/typescript-for-javascript-developers.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/XionKannagi/typescript-for-javascript-developers/issues"
  },
  "homepage": "https://github.com/XionKannagi/typescript-for-javascript-developers#readme"
}

```


## 3.Typescriptパッケージの導入
----
npmでtypescriptをインストールする。  

```
% npm info typescript
<情報を表示>

% npm install --save-dev  typescript@3.7.5 #開発環境にのみtypescriptを導入する。

% npx tsc --init #tsconfig.js生成

```


## 4.JavaScriptへコンパイルする
----
`tscコマンド`を使って.tsファイルを.jsコンパイルする。  

コンパイル対象にするファイルを`./src/install-typescript.ts`として作成する。  
```TypeScript: install-typescript.ts
let message: string = 'Hello TypeScript!';

console.log({message});
```

上記ファイルをコンパイルする。  
```
% ./node_modules/.bin/tsc src/install-typescript.ts # 冗長なので以下npxがおすすめ

% npx tsc src/install-typescript.ts # npxがパッケージ配下を探索してコマンドパスを補完してくれる。
```
生成されたjsファイルの実行。  
```
% node src/install-typescript.js
{ message: 'Hello TypeScript!' }
```

## 5.ts-nodeのインストール
----
`ts-nodeパッケージ`をインストールして[4.JavaScriptへコンパイルする。](#4.JavaScriptへコンパイルする。) で行った  
`compile`&`run`を同時に行ってくれるようにする。

以下コマンドでインストール
```
% npm install --save-dev ts-node@9.0.0
+ ts-node@9.0.0
added 8 packages from 40 contributors and audited 9 packages in 1.191s
found 0 vulnerabilities

```

実行
```
% npx ts-node src/install-typescript.ts
{ message: 'Hello TypeScript!' }
```

## 6.ts-node-devのインストール
----
上記の`ts-node`では、ファイル変更のたびにコマンドの実行が必要だったが、  
`ts-node-dev`を利用することでファイルが変更されると自動で実行されるようになる。  

### 6.1インストール
----
```
% npm install --save-dev ts-node-dev@1.0.0-pre.63
+ ts-node-dev@1.0.0-pre.63
added 74 packages from 44 contributors and audited 83 packages in 4.626s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```

利用するいは設定が必要になるので、以下コマンドを実行する。
```
ts-node-dev --respawn src/install-typescript.ts # コンパイル＋実行の場合

ts-node-dev --respawn --transpile-only src/install-typescript.ts # コンパイルのみ
```
### 6.2npmタスクに登録する
----
`pakage.json`を編集する。
```json: package.json
{
  "name": "typescript-for-javascript-developers",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "ts-node-dev --respawn", ←コレを追加する。
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/XionKannagi/typescript-for-javascript-developers.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/XionKannagi/typescript-for-javascript-developers/issues"
  },
  "homepage": "https://github.com/XionKannagi/typescript-for-javascript-developers#readme",
  "devDependencies": {
    "ts-node": "^9.0.0",
    "ts-node-dev": "^1.0.0-pre.63",
    "typescript": "^3.7.5"
  }
}

```

タスクを実行する。
```
% npm run dev src/install-typescript.ts

```
実行されるとファイルが監視され、変更の保存と同時にコンパイルと実行が行われる。