import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { css } from "@emotion/react";

import { Button, Input, Layout } from "antd";
import Home from "./Page/Home";
import Form from "./Page/Form";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const logo = css`
  height: 100%;
  color: white;
`;

function AppLayout() {
  return (
    <Router>
      <Layout>
        <Header style={{ padding: "0 50px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#135200" }}>
          <Link to="/">
            <div className="logo" css={logo}>
              logo
            </div>
          </Link>
          <Search placeholder="검색해주세요." style={{ width: 400 }} enterButton />
          <Link to="/Login">
            <Button type="primary">로그인</Button>
          </Link>
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: "calc(100vh - 114px)", background: "#fff" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Form} />
          </Switch>
        </Content>
        <Footer>푸터</Footer>
      </Layout>
    </Router>
  );
}

export default AppLayout;
