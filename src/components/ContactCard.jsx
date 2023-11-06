import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbEditCircle } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      //   window.location.reload();
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div
        key={contact.id}
        className="flex p-2 mb-2 bg-yellow justify-between rounded-md items-center"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-orange text-5xl " />
          <div className="">
            <h2 className="font-bold text-md">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex gap-2 cursor-pointer">
          <TbEditCircle onClick={onOpen} className="text-3xl" />
          <FaTrash
            onClick={() => deleteContact(contact.id)}
            className="text-2xl text-orange"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default ContactCard;
