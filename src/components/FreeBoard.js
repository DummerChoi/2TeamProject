import React, { useState, useEffect } from "react";
import "../css/Board.css";

import { Button, Form, Container, Card, Row, Col } from "react-bootstrap";

function FreeBoard() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );
  const [currentId, setCurrentId] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setDate("");
    setContent("");
    setEditMode(false);
  };

  const addPost = () => {
    const newPost = {
      id: currentId,
      title,
      author,
      date,
      content,
    };
    setPosts([newPost, ...posts]);
    setCurrentId(currentId + 1);
    resetForm();
  };

  const editPost = () => {
    setPosts(
      posts.map((post) =>
        post.id === currentId ? { ...post, title, author, date, content } : post
      )
    );
    resetForm();
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <Container>
      <h1 className="text-center my-5">호텔 자유게시판</h1>
      <Form className="FBoard">
        <Form.Group>
          <Form.Control
            className="board"
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
          className="board"
            type="text"
            placeholder="글쓴이"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
          className="board"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
          className="board"
            as="textarea"
            rows={3}
            placeholder="내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        {editMode ? (
          <Button variant="dark" onClick={editPost}>
            수정하기
          </Button>
        ) : (
          <Button variant="dark" onClick={addPost}>
            등록하기
          </Button>
        )}
        <br />
      </Form>
      <br />
      <Row className="Card1">
        {posts.map((post, index) => (
          <Col md={6} lg={4} className="my-2" key={index}>
            <Card>
              <Card.Header>
                {post.title} - {post.author} ({post.date})
              </Card.Header>
              <Card.Body>
                <Card.Text>{post.content}</Card.Text>
                <Button
                  variant="dark"
                  style={{ marginRight: '5px' }}
                  onClick={() => {
                    setEditMode(true);
                    setTitle(post.title);
                    setAuthor(post.author);
                    setDate(post.date);
                    setContent(post.content);
                    setCurrentId(post.id);
                  }}
                >
                  수정
                </Button>
                <Button variant="outline-dark" onClick={() => deletePost(post.id)}>
                  삭제
                </Button>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FreeBoard;