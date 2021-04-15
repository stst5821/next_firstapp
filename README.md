## git clone後の操作

npm upgrade -f
これやらないと npm コマンドが使えない。

npm run start
仮想サーバー起動。

## Prettierとは
参考:https://qiita.com/soarflat/items/06377f3b96964964a65d
  
コードフォーマッターのこと。読み方はプリティア。  
    
何故コードフォーマッタを利用するのか（コードを整形するのか）
  
 - ソースコードの品質を保つため（コードのスタイルの一貫性を保つため）
 - コードレビュー時に、設計や命名などの重要な箇所に集中するため（コードのスタイルの指摘に時間を割くのを防ぐため）
 - 複数のメンバーが各自の整形ルールを適用し、更新する度に余計な差分が発生することを防ぐため
 - ソースコードを綺麗にするための労力（スタイル定義の議論や時間）を費やさなくて済むため
 - ツールに任せられることはツールに任せてしまった方が今後楽になるため

### なぜEslintとPrettierを併用するか

Prettier はコードフォーマッタのため、ESLint のような構文チェック機能はない。  
  
そのため、コードの整形は Prettier が行い、コードの構文チェックは ESLint が行うように併用する。

### Eslintコマンドが実行できない場合
  
-g オプションを使ってEslintを入れてしまった場合にこの設定が必要になる？

~/.config/fish/config.fishにパスを通す設定を書き込む必要がある。

`vi  ~/.config/fish/config.fish`  
で、config.fishを開く。

以下を書き込んで保存。  
`set PATH /usr/local/bin /usr/sbin $PATH`  
  
これでEsLintコマンドが使えるようになる。  
試しにeslint -vと入れて、バージョンが表示されればOK  
  
参考：https://fishshell.com/docs/current/tutorial.html#path