const Home = ({ allPostsData }) => {
  return (
    <div>
      hello
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const allPostsData = []
  return {
    props: {
      allPostsData
    }
  }
}
