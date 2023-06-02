import { useDispatch, useSelector } from "react-redux";
import RouterPages from "./router/router";
import { useEffect } from "react";
import { dataUser } from "./app/features/getuser/action";

function App() {
  const { seed } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataUser());
  }, [dispatch, seed]);
  return (
    <>
      <RouterPages />
    </>
  );
}

export default App;
