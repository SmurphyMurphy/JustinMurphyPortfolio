import React, { Component } from "react";
import axios from "axios";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
    };

    this.PageTitleUpdate = this.PageTitleUpdate.bind(this);
    this.portfolioItems = this.portfolioItems.bind(this);
  }

  PageTitleUpdate() {
    this.setState({
      pageTitle: "something else",
    });
  }

  getProjectItems() {
    axios
      .get("https://justinMurphy.pythonanywhere.com/projects")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  portfolioItems() {
    if (this.state.data) {
      return (
        <div className="cardContainer">
          {this.state.data.map((item) => {
            console.log(item);

            return (
              <Card
                className="card"
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <PortfolioItem
                  key={item.id}
                  title={item.title}
                  url={item.url}
                  slug={item.id}
                />

                <Group position="apart" mt="md" mb="xs">
                  <Badge color="green" variant="light">
                    **Not yet useable**
                  </Badge>
                </Group>

                <Text size="md" color="dimmed">
                  built a user interface of the website daily smarty
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  href="https://github.com/SmurphyMurphy/DailySmartyUI"
                >
                  <Link to={`/project/${props.slug}`}>Link to project</Link>
                </Button>
              </Card>
            );
          })}
        </div>
      );
    }
  }

  componentDidMount() {
    console.log(this.portfolioItems());
    this.getProjectItems();
  }

  componentWillMount() {
    this.setState({
      data: this.props.projectData,
    });
    this.getProjectItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <h1 className="headers">Projects</h1>
        {this.portfolioItems()}
      </div>
    );
  }
}
