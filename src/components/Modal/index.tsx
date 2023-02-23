import { useState } from "react";
import { blogData, genBlogId, locale, options } from "../../services/BlogData";


type Props = {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
};

interface ModalFields {
  title: string;
  coverUrl: string;
  body: string;
  description: string;
  createdBy: string;
};

export function Modal({
  showModal,
  setShowModal
}: Props) {
  const [modalFields, setModalFields] =
    useState<ModalFields>({
      title: "",
      coverUrl: "",
      body: "",
      description: "",
      createdBy: ""
    });

  function updateModalFields(newModalFields: Partial<ModalFields>) {
    setModalFields({ ...modalFields, ...newModalFields });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    blogData.push({
      id: genBlogId(),
      title: modalFields.title,
      cover: modalFields.coverUrl,
      body: modalFields.body,
      description: modalFields.description,
      createdBy: modalFields.createdBy,
      dateCreated: new Date(Date.now())
        .toLocaleDateString(locale, options)
    });

    event.currentTarget.reset();
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div>
      <div className="Modal" style={{ display: showModal ? "block" : "none" }}>
        <span className="close" onClick={handleCloseModal}>
          X
        </span>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              name="name"
              onChange={(e) => updateModalFields({ title: e.target.value })}
            ></input>
            <input
              type="text"
              placeholder="Cover URL"
              name="coverUrl"
              onChange={(e) => updateModalFields({ coverUrl: e.target.value })}
            ></input>
            <textarea
              name="body"
              id=""
              placeholder="Write something ..."
              rows={20}
              onChange={(e) => updateModalFields({ body: e.target.value })}
            ></textarea>
            <input
              type="text"
              placeholder="description"
              name="description"
              onChange={(e) => updateModalFields({ description: e.target.value })}
            ></input>
            <input
              type="text"
              placeholder="createdBy"
              name="createdBy"
              onChange={(e) => updateModalFields({ createdBy: e.target.value })}
            ></input>
            <button>Save</button>
          </form>
        </div>
      </div>
    </div>

  );
}