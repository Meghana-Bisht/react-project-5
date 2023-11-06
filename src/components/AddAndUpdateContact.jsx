import React from "react";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Name is required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added succesfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact Updated Succesfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={async (values) => {
            console.log(values);
            isUpdate
              ? await updateContact(values, contact.id)
              : await addContact(values);
            onClose(false);
            // window.location.reload();
          }}
        >
          <Form className="flex flex-col gap-2 p-5">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                // required="required"
                name="name"
                className="text-md h-10 rounded-md border pl-2 outline-none"
              />
              <div className="text-rose-700">
                <ErrorMessage name="name"></ErrorMessage>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                // required="required"
                name="email"
                className="text-md h-10 rounded-md border pl-2 outline-none"
              />
              <div className="text-rose-700">
                <ErrorMessage name="email"></ErrorMessage>
              </div>
            </div>
            <button className="mt-3 self-end rounded-md border bg-orange px-3 py-1.5 font-bold">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
