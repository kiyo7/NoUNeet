import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export const CompanyDetailPage = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
