import getPostMetadata from "@/utils/utils"

export default async function RootLayout(props) {
  const posts = await getPostMetadata()
  props.params.newProp = posts
  return (
        <div className='mb-auto'>
        {props.children}
        </div>


  )
}
