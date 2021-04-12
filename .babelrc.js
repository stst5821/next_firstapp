// In .babelrc.js
module.exports = {
    // 現在は、以前のトランスフォームである{"runtime": "classic"}がデフォルトのオプションになっている。
    // runtime:'automatic' = React17で追加された、新しいトランスフォームを有効にする。
    // 参考:https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
    plugins: 
      ['babel-plugin-macros',
       [
         'styled-components', 
        //  ssr = サーバーサイドレンダリング スタイリングされたコンポーネントに一意の識別子を追加する。
        // クライアントとサーバーで異なるクラス生成に起因するチェックサムの不一致を回避する。基本はtrueにしておく。
        // displayName = DOM内のコンポーネントを特定しやすくなる。falseにすると、検証ツールで見たとき、styled.divのような記述になり、コンポーネント名がわからないのでtrueのほうがいい。
        // displayNameの記述自体を省略しても有効になるので、falseのときだけ記述してもよい。
         { ssr: true, "displayName": true }
        ]
      ]
  }