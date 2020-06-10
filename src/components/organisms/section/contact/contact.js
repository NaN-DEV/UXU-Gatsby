// IMPORT PLUGIN
import React from "react"
import axios from "axios"
import { Formik } from "formik"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT COMPONENT START
import Row from "../../../atoms/row/row"
import Input from "../../../atoms/input/input"
import Form from "../../../molecules/form/form"
import Select from "../../../atoms/select/select"
import Button from "../../../atoms/button/button"
import TextArea from "../../../atoms/textarea/textarea"
import CheckBox from "../../../atoms/checkbox/checkbox"

// IMPORT STYLES
import {
  Section,
  BoxForm,
  BoxDataCompany,
  BoxDataCompanyBranch,
  List,
  ListTitle,
  ListLI,
  ListName,
  ListLink,
  BoxDataCompanyBranchHeader,
  BoxFormElement,
  BoxFormTitle,
  BoxFormError,
} from "./style/style"

// CREATE NEW COMPONENT

const SectionContactComponent = props => {
  const { children } = props

  return (
    <>
      <Section theme={theme}>
        <Row className="row">
          <BoxForm theme={theme}>
            <Formik
              initialValues={{
                tel: "",
                name: "",
                email: "",
                message: "",
                subject: "",
                checkbox: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                axios
                  .post(
                    "http://localhost:5001/uxu-serwis-komputerowy-279407/us-central1/sendEmail",
                    values
                  )
                  .then(res => {
                    console.log(res)
                    setSubmitting(false)
                  })
                  .catch(err => {
                    console.log(err)
                    setSubmitting(false)
                  })
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <BoxFormElement theme={theme}>
                    <BoxFormTitle theme={theme}>Formularz kontaktowy</BoxFormTitle>
                  </BoxFormElement>
                  <BoxFormElement theme={theme}>
                    <Select
                      id="subject"
                      name="subject"
                      selected="Wybierz temat"
                      option={["Pomoc techniczna", "Obsługa klienta", "Inne"]}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.subject}
                    />
                  </BoxFormElement>

                  <BoxFormElement theme={theme}>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Twoje imię"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    />
                  </BoxFormElement>

                  <BoxFormElement theme={theme} half right>
                    <Input
                      type="tel"
                      id="tel"
                      name="tel"
                      placeholder="Twój telefon komórkowy"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.tel}
                    />
                  </BoxFormElement>
                  <BoxFormElement theme={theme} half left>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Twój adres email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                  </BoxFormElement>
                  <BoxFormElement margin>
                    <TextArea
                      id="message"
                      name="message"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.message}
                      placeholder="Co dusza pragnie ? Opisz nam swój problem :)"
                    />
                  </BoxFormElement>
                  <BoxFormElement theme={theme}>
                    <CheckBox
                      id="checkbox"
                      name="checkbox"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.checkbox}
                      content="UXU potrzebuje twoich danych kontaktowych na czas odpowiedzi na twoje pytanie. Dodatkowo masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej na ten temat znajdziesz w naszej polityce prywatności"
                    />
                  </BoxFormElement>
                  <BoxFormElement margin>
                    <Button submit title="wyślij" disabled={isSubmitting} />
                  </BoxFormElement>
                </form>
              )}
            </Formik>
          </BoxForm>
          <BoxDataCompany theme={theme}>
            <List>
              <ListTitle>Na3 Sp. z o.o.</ListTitle>
              <ListLI>ul. Serwituty 25</ListLI>
              <ListLI>02-233 Warszawa</ListLI>
              <ListLI>Polska</ListLI>
              <ListLI first>
                <ListName>KRS :</ListName>0000649985
              </ListLI>
              <ListLI>
                <ListName>REGON :</ListName>365979030
              </ListLI>
              <ListLI>
                <ListName>VAT-ID :</ListName>5223077290
              </ListLI>
              <ListLI first>
                <ListName>MAIL :</ListName>
                <ListLink href="mailto:biuro@uxu.pl">biuro@uxu.pl</ListLink>
              </ListLI>
            </List>
          </BoxDataCompany>
          <BoxDataCompanyBranch theme={theme}>
            <BoxDataCompanyBranchHeader theme={theme}>NASZE ODDZIAŁY</BoxDataCompanyBranchHeader>
            <List>
              <ListTitle>UXU GORZÓW WLKP.</ListTitle>
              <ListLI>ul. Lużycka 4/11</ListLI>
              <ListLI>66-400 Gorzów Wielkopolski</ListLI>
              <ListLI>Polska</ListLI>
              <ListLI>
                <ListName>TEL :</ListName>
                <ListLink href="tel:+48888881441">+48 888 881 441</ListLink>
              </ListLI>
            </List>
            <List>
              <ListTitle>UXU WARSZAWA</ListTitle>
              <ListLI>ul. Serwituty 25</ListLI>
              <ListLI>02-233 Warszawa</ListLI>
              <ListLI>Polska</ListLI>
              <ListLI>
                <ListName>TEL :</ListName>
                <ListLink href="tel:+48888881441">+48 888 881 441</ListLink>
              </ListLI>
            </List>
          </BoxDataCompanyBranch>
        </Row>
      </Section>
    </>
  )
}

// EXPORT NEW COMPONENT
export default SectionContactComponent
