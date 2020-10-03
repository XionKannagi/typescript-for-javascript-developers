# TypeScriptの導入
----
このプロジェクトは以下のudemy教材で行ったtypescriptの導入に関する内容で記載しています。  
 - **ハンズオンで学ぶ TypeScript - JavaScript エンジニアのための TypeScript徹底入門**  

## Table of Contents
 - [1.Nodeインストール](#1.Nodeインストール)
 - [2.package.jsonの作成](#2.package.jsonの作成)
 - [3.Typescriptパッケージの導入](#3.Typescriptパッケージの導入)
 - [4.JavaScriptへコンパイルする。](#4.JavaScriptへコンパイルする。)
 - [5.ts nodeのインストール](#5.ts-nodeのインストール)


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


# 3.Typescriptパッケージの導入
----
npmでtypescriptをインストールする。  

```
% npm info typescript
<情報を表示>

% npm install --save-dev  typescript@3.7.5 #開発環境にのみtypescriptを導入する。

```


# 4.JavaScriptへコンパイルする。
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
% npm install --save-dev ts-node@8.6.2
+ ts-node@8.6.2
added 8 packages from 40 contributors and audited 9 packages in 1.191s
found 0 vulnerabilities

```

実行
```
% npx ts-node src/install-typescript.ts
{ message: 'Hello TypeScript!' }
```