import uniqid from 'uniqid'
import { courses } from '../../portfolio'
import './Courses.css'

const Courses = () => {
  if (!courses.length) return null

  return (
    <section className='section courses' id='courses'>
      <h2 className='section__title'>Courses</h2>
      <ul className='courses__list'>
        {courses.map((course) => (
          <li key={uniqid()} className='courses__list-item btn btn--plain'>
            {course}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Courses

