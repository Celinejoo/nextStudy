import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import PhotoModalCloseButton from "./_component/PhotoModalCloseButton";
import style from "./photoModal.module.css";
import { faker } from "@faker-js/faker";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import Post from "@/app/(afterLogin)/_component/Post";

export default function PhotoModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    post: {
      content: faker.lorem.text(),
    },
  };
  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <div className={style.imageZone}>
        <img src={photo.image} alt={photo.post.content} />
        <div
          className={style.image}
          style={{ backgroundImage: `url(${photo.link})` }}
        />

        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons white={true} />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        <Post noImage />
        <CommentForm />
      </div>
    </div>
  );
}
