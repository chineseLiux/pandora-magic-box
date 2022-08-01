import {connect} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = (props: any) => {
  console.log(props)
  let location = useLocation();
  if (!props.currentUser) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return props.children
}

const mapStateToProps = (state: any) => ({
  currentUser: state.currentUser
})
export default connect(mapStateToProps)(RequireAuth)
