import teammates from './data';
import s from './OurTeam.module.css';

export default function OurTeam() {
  return (
    <div className={s.content}>
      <button className={s.close}></button>
      {teammates.map(teammate => (
        <figure className={s.snip1344}>
          <img src={teammate.photo} alt="" className={s.background} />
          <img
            src={teammate.photo}
            alt={teammate.fullName}
            className={s.profile}
          />
          <figcaption>
            <h3>
              {teammate.fullName}
              <span>{teammate.position}</span>
            </h3>
            <div className={s.icons}>
              <a href={teammate.linkedIn}>
                <i className="ion-social-linkedin-outline"></i>
              </a>
              <a href={teammate.gitHub}>
                <i className="ion-social-github-outline"></i>
              </a>
              <a href={teammate.instagram}>
                <i className="ion-social-instagram-outline"></i>
              </a>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
