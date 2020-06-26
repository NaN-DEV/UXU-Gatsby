// IMPORT PLUGIN
import React from "react"
import axios from "axios"
import { useFormik } from "formik"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT COMPONENT START
import Row from "../../../atoms/row/row"
import Input from "../../../atoms/input/input"
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
const validate = values => {
  const errors = {}

  if (!values.subject && values.subject.length === 0) {
    errors.subject = "Hallo... o czym mamy gadać ? :)"
  }

  if (!values.name) {
    errors.name = "Hallo... jak ci na imię ? :)"
  }

  if (!values.tel) {
    errors.tel = "Hallo... pierw podaj twój nr. tel. :)"
  } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i.test(values.tel)) {
    errors.tel = "Hallo... coś ten nr telefonu nie taki"
  }

  if (!values.email) {
    errors.email = "Hallo... gdzie mamy ci odpisać ?"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Hallo... coś ten adres email nie taki"
  }

  if (!values.message) {
    errors.message = "Hallo... pierw opisz swój problem :)"
  } else if (values.message.length < 10) {
    errors.message = "Coś te Twoje pytanie jest za krótkie"
  }

  if (!values.checkbox) {
    errors.checkbox = "Hallo... jeżeli chcesz abyśmy ci odpowiedzieli musisz zaakceptować warunki"
  }

  return errors
}

const SectionContactComponent = props => {
  const { children } = props

  const formik = useFormik({
    initialValues: {
      tel: "",
      name: "",
      email: "",
      message: "",
      subject: "",
      checkbox: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      return axios
        .post(
          "https://us-central1-uxu-serwis-komputerowy-279407.cloudfunctions.net/sendEmailContact",
          values
        )
        .then(res => {
          alert(
            `Hej ${
              values.name ? values.name : `Nieznajomy`
            }, odebraliśmy twoje pytanie. Odpoowiemy ci w max 24h`
          )
          resetForm()
        })
        .catch(err => {
          console.log(err)
        })
    },
  })

  return (
    <>
      <Section theme={theme}>
        <Row className="row">
          <BoxForm theme={theme}>
            <form onSubmit={formik.handleSubmit}>
              <BoxFormElement theme={theme}>
                <BoxFormTitle theme={theme}>Formularz kontaktowy</BoxFormTitle>
              </BoxFormElement>
              <BoxFormElement theme={theme}>
                {formik.touched.subject && formik.errors.subject ? (
                  <>
                    <Select
                      id="subject"
                      name="subject"
                      className="error"
                      selected="Wybierz temat *"
                      option={["Pomoc techniczna", "Obsługa klienta", "Inne"]}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                    />
                    <BoxFormError>{formik.errors.subject}</BoxFormError>
                  </>
                ) : (
                  <>
                    <Select
                      id="subject"
                      name="subject"
                      selected="Wybierz temat *"
                      option={["Pomoc techniczna", "Obsługa klienta", "Inne"]}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                    />
                  </>
                )}
              </BoxFormElement>

              <BoxFormElement theme={theme}>
                {formik.touched.name && formik.errors.name ? (
                  <>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      className="error"
                      placeholder="Twoje imię *"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <BoxFormError>{formik.errors.name}</BoxFormError>
                  </>
                ) : (
                  <>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Twoje imię *"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </>
                )}
              </BoxFormElement>

              <BoxFormElement theme={theme} half right>
                {formik.touched.tel && formik.errors.tel ? (
                  <>
                    <Input
                      type="tel"
                      id="tel"
                      name="tel"
                      className="error"
                      placeholder="Twój telefon komórkowy *"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.tel}
                    />
                    <BoxFormError>{formik.errors.tel}</BoxFormError>
                  </>
                ) : (
                  <>
                    <Input
                      type="tel"
                      id="tel"
                      name="tel"
                      placeholder="Twój telefon komórkowy *"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.tel}
                    />
                  </>
                )}
              </BoxFormElement>
              <BoxFormElement theme={theme} half left>
                {formik.touched.email && formik.errors.email ? (
                  <>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="error"
                      placeholder="Twój adres email *"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <BoxFormError>{formik.errors.email}</BoxFormError>
                  </>
                ) : (
                  <>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Twój adres email *"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </>
                )}
              </BoxFormElement>
              <BoxFormElement margin>
                {formik.touched.message && formik.errors.message ? (
                  <>
                    <TextArea
                      id="message"
                      name="message"
                      className="error"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      placeholder="Co dusza pragnie ? Opisz nam swój problem :) *"
                    />
                    <BoxFormError>{formik.errors.message}</BoxFormError>
                  </>
                ) : (
                  <>
                    <TextArea
                      id="message"
                      name="message"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      placeholder="Co dusza pragnie ? Opisz nam swój problem :) *"
                    />
                  </>
                )}
              </BoxFormElement>
              <BoxFormElement theme={theme}>
                {formik.touched.checkbox && formik.errors.checkbox ? (
                  <>
                    <CheckBox
                      id="checkbox"
                      name="checkbox"
                      className="error"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.checkbox}
                      content="UXU potrzebuje twoich danych kontaktowych na czas odpowiedzi na twoje pytanie. Dodatkowo masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej na ten temat znajdziesz w naszej polityce prywatności *"
                    />
                    <BoxFormError>{formik.errors.checkbox}</BoxFormError>
                  </>
                ) : (
                  <>
                    <CheckBox
                      id="checkbox"
                      name="checkbox"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.checkbox}
                      content="UXU potrzebuje twoich danych kontaktowych na czas odpowiedzi na twoje pytanie. Dodatkowo masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej na ten temat znajdziesz w naszej polityce prywatności *"
                    />
                  </>
                )}
              </BoxFormElement>
              <BoxFormElement margin>
                <Button submit title="Wyślij" disabled={!(formik.isValid && formik.dirty)} />
              </BoxFormElement>
            </form>
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
