import { Field, Form, Formik } from "formik";
import { useLayoutEffect, useRef } from "react";
import Button from "../Button/Button";
import useStore from "@/app/zustand/store";

export default function SearchComponent({ isLoading, name }) {
  const editFilters = useStore((state) => state.editFilters);
  const filterName = name;
  const form = useRef();

  return (
    <div className="mb-4">
      <Formik
        innerRef={form}
        initialValues={{
          q: "",
        }}
        enableReinitialize
        onSubmit={(values) => {
          editFilters(filterName, values);
        }}
      >
        <Form className="flex flex-col md:flex-row gap-5 items-center justify-end">
          <Field
            name={'q'}
            placeholder={'Search Here...'}
            id={'search'}
            className={`border p-2 rounded-lg min-w-[300px] dark:bg-slate-800 dark:text-white dark:border-white/50 focus-visible:outline-none`}
          />
          <div className="flex gap-3 items-center">
            <Button type="submit" isLoading={isLoading}>
              Search
            </Button>
            <Button
              onClick={() => {
                form.current.resetForm();
                editFilters(filterName, {});
              }}
            >
              Reset
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
