import React, { Component } from "react";
import { Layout, Input, Button, List, Icon } from "antd";
import Todo from "./models/Todo"

import "./App.css";

const { Header, Footer, Content } = Layout;

class App extends Component {
  state = {
    addingTodo: false,
    pendingTodo: "",
    todos: []
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/todos/");
      const todos = await res.json();
      this.setState({
        todos
      })
    } catch (e) {
      console.log(e)
    }
  }
  
  addTodo() {}

  completeTodo(id: any) {}

  render() {
    return (
      <Layout className="App">
        <Header className="App-header">
          <h1>Todos</h1>
        </Header>
        <Content className="App-content">
          <Input
              ref="add-todo-input"
              className="App-add-todo-input"
              size="large"
              placeholder="What needs to be done?"
              disabled={this.state.addingTodo}
              onChange={evt => this.setState({ pendingTodo: evt.target.value })}
              value={this.state.pendingTodo}
              onPressEnter={this.addTodo}
            />
            <Button 
              className="App-add-todo-button"
              size="large"
              type="primary"
              onClick={this.addTodo}
              loading={this.state.addingTodo}
            >
            Add Todo
          </Button>
          <List
            className="App-todos"
            size="large"
            bordered
            dataSource={this.state.todos}
            renderItem={(todo: Todo)  => (
              <List.Item>
                {todo.content}
                <Icon
                  onClick={evt => this.completeTodo(todo.id)}
                  className="App-todo-complete"
                  type="check"
                />
              </List.Item>
            )}
          />
        </Content>
        <Footer className="App-footer">&copy; https://github.com/JonatanPineda/django-react-redux-todo-app</Footer>
      </Layout>
    );
  }
}

export default App;