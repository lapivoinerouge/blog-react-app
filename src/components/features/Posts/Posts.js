import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import PageTitle from '../../common/PageTitle/PageTitle';
import styles from './Posts.module.scss';
import { NavLink } from 'react-router-dom';

const Posts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <section>
      <div className={'d-flex justify-content-between ' + styles.titleContainer}>
        <PageTitle>All posts</PageTitle>
        <NavLink className={'btn btn-outline-primary'} to={'/post/add'}>Add post</NavLink>
      </div>
      <div className='row'>
        {posts.map(post =>
        <div className={'col-12 col-md-6 col-lg-4'} key={post.id}>
          <Card className={styles.card}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text className={styles.subtitle}><b>Author: </b>{post.author}</Card.Text>
              <Card.Text className={styles.subtitle}><b>Published: </b>{post.publishedDate}</Card.Text>
              <Card.Text className={styles.description}>{post.shortDescription}</Card.Text>
              <NavLink className={'btn btn-primary'} to={'/post/' + post.id}>Read more</NavLink>
            </Card.Body>
          </Card>
        </div>
        )}
    </div>
    </section>
  );
}

export default Posts;