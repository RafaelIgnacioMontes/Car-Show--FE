import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="about">
        <h2>About Us</h2>
        <h4>Our mission</h4>
        <div>
          <big>
          Our mission is to create a dynamic and engaging online platform that celebrates the art and culture of the automotive industry. We aim to showcase the world's finest automobiles, from classic cars to modern supercars, and to promote the work of the talented individuals and organizations that bring them to life. Our website will serve as a hub for car enthusiasts of all backgrounds and interests, providing them with the latest news, information, and resources related to the car show world. Above all, we strive to inspire a love of cars and an appreciation for their design, engineering, and history, and to foster a sense of community among those who share this passion.
          </big>
        </div>
        <h4>Our Statement</h4>
        <big>
        We are dedicated to providing a comprehensive and immersive online experience for car enthusiasts around the world. Our team is passionate about cars and is committed to delivering high-quality content, engaging features, and an intuitive user interface that allows visitors to easily navigate and discover all that the car show world has to offer. We understand that the automotive industry is constantly evolving, and we are dedicated to staying up-to-date with the latest trends and developments, as well as to celebrating the rich history and culture that has made cars such an integral part of our lives. Whether you are a seasoned car aficionado or a newcomer to the world of automobiles, we are here to inspire, educate, and entertain you with the best that the car show world has to offer.
        </big>
        <div>
          <img
            className="about-img"
            src="https://media1.giphy.com/media/5QTKDImCF2wOnJpRFs/giphy.gif?cid=ecf05e47az7tns9bvxy7h3x8ngvm9yb3yyte4rkov7ga8e67&rid=giphy.gif&ct=g"
            alt="cars"
            ></img>
        </div>
      </div>
      <section className='team'>
        <div className='rafael-socials'>
          <h5>Rafael Ignacio Montes</h5>
          <img src="https://media.licdn.com/dms/image/D5635AQEvqpmkGoij3g/profile-framedphoto-shrink_400_400/0/1675885133222?e=1678719600&v=beta&t=v7baG86VfipiLa0-1ouWzz9bqLQiZUkm_-EN3aSXLrE" alt='rafael'></img>
        <Link to="https://github.com/RafaelIgnacioMontes">
          <img
            className="rafael-github"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='github'
            ></img>
        </Link>
        <Link to="https://www.linkedin.com/in/rafael-montes-9040491a5/">
          <img className='rafael-linkedin'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt='linkedin'></img>
        </Link>
        </div>
        <div className='clifton-socials'>
          <h5>Clifton Lucas</h5>
          <img src="https://media.licdn.com/dms/image/D5603AQFQPrXQephSlg/profile-displayphoto-shrink_400_400/0/1668648670371?e=1683763200&v=beta&t=vPbde9pO1t0JvnTnCh1loItL-lIQmhxICSQhP-aD-hs" alt='clifton'></img>
        <Link to="https://github.com/Cliftonlucas1">
          <img
            className="clifon-github"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='github'
            ></img>
        </Link>
        <Link to="https://www.linkedin.com/in/clifton-lucas-b80540121/">
          <img className='clifton-linkedin'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt='linkein'></img>
        </Link>
        </div>
        <div className='mike-socials'>
          <h5>Michael Durando</h5>
          <img src="https://media.licdn.com/dms/image/D4E35AQGv8OsMUTcj9Q/profile-framedphoto-shrink_400_400/0/1675889709091?e=1678730400&v=beta&t=GYNM-Dn7_IhXo6kU0rjnct3d06zkyY9QEaMWXe-ueGI" alt='mike'></img>
        <Link to="https://github.com/mjdurando82">
          <img
            className="mike-github"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='github'
            ></img>
        </Link>
        <Link to="https://www.linkedin.com/in/michael-durando-101050138/">
          <img className='mike-linkedin'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt='linkedin'></img>
        </Link>
        </div>
      </section>
    </div>
  )
}

export default About
