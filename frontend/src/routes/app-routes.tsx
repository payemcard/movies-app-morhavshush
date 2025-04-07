import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import {ROUTES} from "./routes";
import Dashboard from "../modules/dashboard/dashboard";
import ErrorBoundary from "../modules/errors/error-boundary";

const Routing = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route
          path={ROUTES.main}
          element={
            <ErrorBoundary>
              <Dashboard />
            </ErrorBoundary>
          }
        />
      </ReactRoutes>
    </Router>
  );
};

export default Routing;
