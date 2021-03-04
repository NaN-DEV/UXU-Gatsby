// Import plugin
import React from "react"
import axios from "axios"
import { Formik, Form } from "formik"

// Import settings style
import settings from "../../../../layouts/settings/settings"

// Import component start
import Modal from "../../modal/modal"
import Row from "../../../atoms/row/row"
import Input from "../../../atoms/input/input"
import List from "../../../molecules/list/list"
import Button from "../../../atoms/button/button"
import TextArea from "../../../atoms/textarea/textarea"
import CheckBox from "../../../atoms/checkbox/checkbox"

// Import styles
import { Section, BoxForm, Box, Title, BoxDataCompany, Point } from "./style/style"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// Create new component
class SectionContactComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      isModalMessage: "Upsss... Coś poszło nie tak, spróbujmy jeszcze raz !",
    }

    this.openModal = this.openModal.bind(this)
    this.clouseModal = this.clouseModal.bind(this)
    this.validateName = this.validateName.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validateDescription = this.validateDescription.bind(this)
    this.validateRodoGroup = this.validateRodoGroup.bind(this)
  }

  openModal = message => {
    this.setState({
      isModalOpen: true,
      isModalMessage: message,
    })
  }

  clouseModal = () => {
    this.setState({
      isModalOpen: false,
      isModalMessage: "",
    })
  }

  validateName = value => {
    let error
    if (!value) {
      error = "Imię jest wymagane !"
    }
    return error
  }

  validateEmail = value => {
    let error
    if (!value) {
      error = "Adres email jest wymagany !"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Nie poprawny adres email !"
    }
    return error
  }

  validateDescription = value => {
    let error
    if (!value) {
      error = "Twój opis jest wymagany !"
    } else if (value.length < 5) {
      error = "Cos za krótki jest ten opis :)"
    }
    return error
  }

  validateRodoGroup = value => {
    let error
    if (!value[0]) {
      error = "Hej... bez tej zgordy nie mogę Ci odpisać :("
    }
    return error
  }

  render() {
    const { isModalOpen, isModalMessage } = this.state
    const { content } = this.props

    return (
      <>
        {isModalOpen && (
          <Modal type="info" content={{ info: isModalMessage }} parameters={{ switchPower: this.clouseModal }} />
        )}
        <Section theme={{ settings: settings }}>
          <Row parameters={{}}>
            <BoxForm theme={{ settings: settings }}>
              <Formik
                isInitialValid={false}
                initialValues={{
                  username: "",
                  email: "",
                  description: "",
                  rodoGroup: [],
                }}
                onSubmit={(values, actions) => {
                  fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({
                      "form-name": "contact",
                      ...values,
                      rodoGroup: values.rodoGroup.filter(e => e),
                    }),
                  })
                    .then(() => {
                      this.openModal("Hej! Dzieki za kontakt, niebawem odpisze :)")
                      actions.resetForm()
                    })
                    .catch(() => {
                      this.openModal("Upsss... Coś poszło nie tak, spróbujmy jeszcze raz !")
                    })
                    .finally(() => actions.setSubmitting(false))
                }}
              >
                {({ errors, touched, isValid, values, setFieldValue }) => (
                  <>
                    <Form name="contact" data-netlify={1}>
                      <Box theme={{ settings: settings }}>
                        <Title theme={{ settings: settings }}>Formularz </Title>
                      </Box>
                      <Input
                        type="text"
                        content={{
                          placeholder: "Jak Ci na imię ?",
                          errors: errors.username && touched.username && errors.username,
                        }}
                        parameters={{
                          name: "username",
                          required: true,
                          validate: this.validateName,
                          value: values.username,
                        }}
                      />
                      <Input
                        type="text"
                        content={{
                          placeholder: "Na jaki email mam odpisać ?",
                          errors: errors.email && touched.email && errors.email,
                        }}
                        parameters={{
                          name: "email",
                          required: true,
                          validate: this.validateEmail,
                          value: values.email,
                        }}
                      />
                      <TextArea
                        content={{
                          title: `Najpierw potrzebujesz NDA? Wyślij mi e-mail na adres : ${content.mail}`,
                          placeholder: "Hej , opisz tutaj krótko swój pomysł lub problem",
                          errors: errors.description && touched.description && errors.description,
                        }}
                        parameters={{
                          name: "description",
                          required: true,
                          validate: this.validateDescription,
                          value: values.description,
                        }}
                      />
                      <CheckBox
                        type="classic"
                        id="rodoGroup-privacyPolicyAccepted-id"
                        content={{
                          description:
                            "<p>potrzebuje Twoich danych do czasu udzielenia odpowiedzi . Masz prawo zrezygnować z przetwarzania Twoich danych lub żądać ich usunięcia w dowolnym momencie. Więcej informacji znajdziesz w <a href='../politics/'>polityce prywatności</a></p>",
                          errors: errors.rodoGroup && touched.rodoGroup && errors.rodoGroup,
                        }}
                        parameters={{
                          name: "rodoGroup",
                          required: true,
                          validate: this.validateRodoGroup,
                          onChange: event => {
                            const value = event.target.checked ? "privacyPolicyAccepted" : null
                            setFieldValue("rodoGroup.0", value)
                          },
                          checked: values.rodoGroup.includes("privacyPolicyAccepted"),
                        }}
                      />
                      <Button
                        type="sumbit"
                        content={{ title: "Wyślij" }}
                        parameters={{
                          button: true,
                          disabled: !isValid,
                        }}
                      >
                        Wyślij
                      </Button>
                    </Form>
                  </>
                )}
              </Formik>
            </BoxForm>
            <BoxDataCompany theme={{ settings: settings }}>
              <Box theme={{ settings: settings }}>
                <Title theme={{ settings: settings }}>Dane</Title>
              </Box>
              <List type="vertical" parameters={{}}>
                <Point theme={{ settings: settings }}>Na3 Sp. z o.o.</Point>
                <Point theme={{ settings: settings }}>ul. Serwituty 25</Point>
                <Point theme={{ settings: settings }}>02-233 Warszawa</Point>
                <Point theme={{ settings: settings }}>Polska</Point>
                <Box theme={{ settings: settings }}>
                  <Point theme={{ settings: settings }}>
                    <strong>KRS :</strong>0000649985
                  </Point>
                  <Point theme={{ settings: settings }}>
                    <strong>REGON :</strong>365979030
                  </Point>
                  <Point theme={{ settings: settings }}>
                    <strong>VAT-ID :</strong>
                    5223077290
                  </Point>
                </Box>
                <Box theme={{ settings: settings }}>
                  <Point theme={{ settings: settings }}>
                    <strong>MAIL :</strong>
                    <Button
                      type="linkOut"
                      content={{ to: "mailto:hello@nan.nz", title: "hello@nan.nz" }}
                      parameters={{}}
                    >
                      hello@nan.nz
                    </Button>
                  </Point>
                </Box>
              </List>
            </BoxDataCompany>
          </Row>
        </Section>
      </>
    )
  }
}

// EXPORT NEW COMPONENT
export default SectionContactComponent
