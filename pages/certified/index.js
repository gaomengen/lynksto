import { withRouter } from 'next/router'
import Layout from '../../components/MyLayout.js';

const Certificate = withRouter(props => (
  <Layout>
    <h1>{props.router.query.name}</h1>
    <p>This is the certificate page.</p>
  </Layout>
))

export default Certificate
