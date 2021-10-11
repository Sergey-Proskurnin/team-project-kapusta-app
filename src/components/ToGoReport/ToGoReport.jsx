import s from './ToGoReport.module.css';

const ToGoReport = () => {
  return (
    <div className={s.toGoReport}>
      <a href="/report" className={s.link}>
        <span>Перейти к отчетам</span>
      </a>
    </div>
  );
};

export default ToGoReport;
