import style from "./FollowList.module.css";

const FollowerData = [
  {
    id: 1,
    fullname: "Augusto Shillan",
    userName: "@ashillan0",
    image:
      "https://cdn.fstoppers.com/styles/full/s3/media/2017/09/10/1_use_psychology_to_take_better_photographs.jpeg",
  },
  {
    id: 1,
    fullname: "Simone Ravenscroft",
    userName: "@sravenscroft1",
    image:
      "https://images.unsplash.com/photo-1539090521412-7af9bbc1110b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
  },
  {
    id: 1,
    fullname: "Lyssa Rippin",
    userName: "@lrippin2",
    image:
      "https://cdn.lifehack.org/wp-content/uploads/2015/02/what-makes-people-happy.jpeg",
  },
];

export default function FollowList() {
  return (
    <div className={style.mainContainer}>
      <p className={style.heading}> Who to follow </p>
      <div>
        {FollowerData.map((elem) => (
          <div key={elem.id} className={style.container}>
            <img className={style.image} src={elem.image} />
            <div className={style.div1}>
              <span className={style.div}>
                <b>{elem.fullname}</b>
                <p>{elem.userName}</p>
              </span>
              <button className={style.btn}>Follow</button>
            </div>
          </div>
        ))}
      </div>
      <button className={style.button}>Show more</button>
    </div>
  );
}
