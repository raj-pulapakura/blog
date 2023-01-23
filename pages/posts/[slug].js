import {GraphQLClient, gql} from "graphql-request"
import Navbar from '@/components/Navbar'

const graphcms = new GraphQLClient("https://api-ap-southeast-2.hygraph.com/v2/clcx3t4zy218k01ujf0ja33lo/master")

const QUERY = gql`
query Post($slug: String!) {
  post(where: {slug: $slug}) {
    createdAt
    updatedAt
    id
    slug
    title
    tags
    content {
      html
    }
    coverPhoto {
      url
    }
  }
}
`

const SLUGLIST = gql`
    query Posts {
        posts {
            slug
        }
    }
`

export async function getStaticPaths(){
    const {posts} = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false
    }
}

export async function getStaticProps({params}){
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {slug});
    const post = data.post;
  return {
    props: {
      post,
    },
  }
}

export default function BlogPost({post}) {
    return (
      <>
        <Navbar/>

        <section className="mt-40 w-1/2 mb-20 m-auto pt-10">
            <img className="w-full mb-10 pb-5 border-b-solid border-b-gray-300 border-b-2" src={post.coverPhoto.url}/>
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-base text-gray-500 mb-3">First Posted: {post.createdAt.slice(0,10)}, Last Updated: {post.updatedAt.slice(0,10)}</p>
            <div className="flex gap-x-4 mb-10">
                        {post.tags.map(tag => <p className=" bg-gray-100 p-1 rounded-md">{tag}</p>)}
                    </div>
            <div className="leading-10" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
        </section>
      </>
    );
}