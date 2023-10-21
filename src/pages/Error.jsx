import Wrapper from "../assets/wrappers/ErrorPage"
import { Link, useRouteError } from "react-router-dom"
import img from "../assets/not-found.svg"

const Error = () => {
  const error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Image Not Found" />
          <h3 style={{ color: "red" }}>Oops!</h3>
          <p>Page NOT found</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h3>Something went wrong!</h3>
    </Wrapper>
  )
}
export default Error
