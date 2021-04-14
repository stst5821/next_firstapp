import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Tr500 = styled.div`
${tw`text-red-500`}
`

function Home() {
  return (
  <div>
    {/* Nextの普通の書き方 */}
    {/* <div className = “text-red-500”>helloworld</div> */}

    {/* styled-componentsの書き方 */}
    {/* twinmacro入れてないので、まだstyleは適用されない。*/}
    <Tr500>styled-hello!</Tr500>
    <Button>I’m button</Button>
  </div>
  )
}

export default Home