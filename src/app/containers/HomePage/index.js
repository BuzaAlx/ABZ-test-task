import React, { useState } from "react";
import CardList from "../../components/CardList";
import Form from "../../components/Form";
import PageLayout from "../../components/PageLayout/PageLayout";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import Welcome from "../../components/Welcome";
import { sectionText } from "../../../consts/list";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormSent, setIsFormSent] = useState(false);

  return (
    <>
      <PageLayout>
        <Welcome />
        <SectionLayout title="Working with GET request">
          <CardList
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            users={users}
            setUsers={setUsers}
          />
        </SectionLayout>
        <SectionLayout title={isFormSent ? sectionText[0] : sectionText[1]}>
          <Form
            isFormSent={isFormSent}
            setIsFormSent={setIsFormSent}
            setUsers={setUsers}
          />
        </SectionLayout>
      </PageLayout>
    </>
  );
};

export default HomePage;
