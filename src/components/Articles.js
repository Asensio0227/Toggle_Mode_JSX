import moment from 'moment';

const Articles = ({length,snippet,date,title}) => {
  return (
    <section className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('MMMM dddd Do, yyyy')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </section>
  )
}

export default Articles
