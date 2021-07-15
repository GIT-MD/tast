import { Route, Switch } from "react-router";
import { Home } from "../components/Pages/Home";
import { Login } from "../components/Pages/Login";
import { Apartment } from "../components/Pages/Apartment";
import { connect } from "react-redux";
import { createUser } from "../ReduxStore/actions";

export const Routes = (props) => {
  // const isLoggedIn = !!props.user.token;
  console.log(props);

  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/" component={Login} /> */}
        <Route path="/apartment/:id" component={Apartment} />
      </Switch>
      <button onClick={() => props.dispatch(createUser({ type: "asdasdasd" }))}>
        Login User
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Routes);
