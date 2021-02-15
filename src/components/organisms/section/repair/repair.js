// IMPORT PLUGIN
import axios from "axios"
import { useFormik } from "formik"
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"
import Radio from "../../../atoms/radio/radio"
import Input from "../../../atoms/input/input"
import Select from "../../../atoms/select/select"
import Button from "../../../atoms/button/button"
import TextArea from "../../../atoms/textarea/textarea"
import CheckBox from "../../../atoms/checkbox/checkbox"

// IMPORT COMPONENT START
import Row from "../../../atoms/row/row"

// IMPORT STYLES
import {
  BoxFormElement,
  Section,
  Box,
  BoxElement,
  BoxAllElement,
  BoxTitle,
  BoxTag,
  BoxTagPkt,
  Step,
  BoxError,
} from "./style/style"

// CREATE NEW COMPONENT

const validate = values => {
  const errors = {}

  if (!values.service && !values.service.length > 0) {
    errors.service = "Co nam oddajesz ?"
  }

  if (!values.send && !values.send.length > 0) {
    errors.send = "Jak nam dostarczysz ?"
  }

  if (!values.hardwareType && values.hardwareType.length === 0) {
    errors.hardwareType = "Co nam oddajesz ?"
  }

  if (!values.message) {
    errors.message = "Pierw opisz nam jak doszło do uszkodzenia i jakie są objawy"
  } else if (values.message.length < 10) {
    errors.message = "Coś za krótki ten opis"
  }

  if (!values.firstName) {
    errors.firstName = "Hallo... Jak ci na imię ?"
  } else if (values.firstName.length < 2) {
    errors.firstName = "Coś za krótkie te Twoje imię"
  }

  if (!values.lastName) {
    errors.lastName = "Hallo... Jak ci na nazwisko ?"
  } else if (values.lastName.length < 2) {
    errors.lastName = "Coś za krótkie te Twoje nazwisko"
  }

  if (!values.street) {
    errors.street = "Na jakiej ulicy mieszkasz ?"
  }

  if (!values.buildingNumber) {
    errors.buildingNumber = "Hallo... jaki numer budynku ?"
  } else if (!/^[0-9]*(.)$/i.test(values.buildingNumber)) {
    errors.buildingNumber = "Źle wprowadziłeś nr. budynku"
  }

  if (values.apartmentNumber.length > 0 && !/^[0-9]*(.)$/i.test(values.apartmentNumber)) {
    errors.apartmentNumber = "Coś ten adres email nie taki"
  }

  if (!values.city) {
    errors.city = "W jakim mieście mieszkasz ?"
  }

  if (!values.postCode) {
    errors.postCode = "Jaki jest do ciebie kod pocztyowy ?"
  } else if (!/^[0-9]{2}-[0-9]{3}$/i.test(values.postCode)) {
    errors.postCode = "Źle wprowadziłeś kod pocztowy"
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

  if (!values.checkbox) {
    errors.checkbox = "Hallo... jeżeli chcesz abyśmy ci odpowiedzieli musisz zaakceptować warunki"
  }

  return errors
}

const SectionReapairComponent = props => {
  const { children } = props

  const formik = useFormik({
    initialValues: {
      tel: "",
      send: "",
      city: "",
      email: "",
      street: "",
      message: "",
      service: "",
      lastName: "",
      postCode: "",
      checkbox: "",
      firstName: "",
      hardwareType: "",
      buildingNumber: "",
      apartmentNumber: "",
    },
    validate,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(false)
      axios
        .post(
          "https://us-central1-uxu-serwis-komputerowy-279407.cloudfunctions.net/sendEmailRepair",
          values
        )
        .then(res => {
          alert(
            `Hej ${
              values.firstName ? values.firstName : `Nieznajomy`
            } twoje zgłoszenie zostało przyjęte`
          )
          resetForm()
        })
        .catch(err => {
          console.log(err)
        })
      resetForm()
    },
  })

  return (
    <>
      <Section theme={theme}>
        <Row className="row">
          <form onSubmit={formik.handleSubmit}>
            <Box theme={theme} half id="step1">
              <BoxElement theme={theme}>
                <BoxElement theme={theme} mobile>
                  <Step theme={theme} number={1}>
                    Co możemy dla Ciebie zrobić ?
                  </Step>
                </BoxElement>
                <BoxElement theme={theme}>
                  {formik.touched.service && formik.errors.service ? (
                    <>
                      <Radio
                        active
                        id="tools"
                        icon="tools"
                        click="step2"
                        type="repair"
                        name="service"
                        value="repair service"
                        title="DOKONAĆ NAPRAWY"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.service}
                        description="NAPRAWIMY TWOJE URZDZENIE"
                      />
                      <Radio
                        active
                        id="rocket"
                        icon="rocket"
                        click="step2"
                        type="repair"
                        icon="rocket"
                        name="service"
                        value="tuning service"
                        title="DOKONAĆ  TUNINGU"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.service}
                        description="ULEPSZYMY TWOJE URZDZENIE"
                      />
                      <Radio
                        active
                        id="ask"
                        icon="ask"
                        title="INNE"
                        click="step2"
                        type="repair"
                        name="service"
                        value="other service"
                        description="NIC NIE PASUJE"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.service}
                      />
                      <BoxError>{formik.errors.service}</BoxError>
                    </>
                  ) : (
                    <>
                      <Radio
                        active
                        id="tools"
                        icon="tools"
                        click="step2"
                        type="repair"
                        name="service"
                        value="repair service"
                        title="DOKONAĆ NAPRAWY"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.service}
                        description="NAPRAWIMY TWOJE URZDZENIE"
                      />
                      <Radio
                        active
                        id="rocket"
                        icon="rocket"
                        click="step2"
                        type="repair"
                        icon="rocket"
                        name="service"
                        value="tuning service"
                        title="DOKONAĆ  TUNINGU"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.service}
                        description="ULEPSZYMY TWOJE URZDZENIE"
                      />
                      <Radio
                        active
                        id="ask"
                        icon="ask"
                        title="INNE"
                        click="step2"
                        type="repair"
                        name="service"
                        value="other service"
                        description="NIC NIE PASUJE"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.service}
                      />
                    </>
                  )}
                </BoxElement>
              </BoxElement>
            </Box>
            <Box theme={theme} id="step2">
              <BoxElement theme={theme}>
                <BoxElement theme={theme} mobile>
                  <Step theme={theme} number={2}>
                    Jak nam dostarczysz sprzęt ?
                  </Step>
                </BoxElement>
                <BoxElement theme={theme}>
                  {formik.touched.send && formik.errors.send ? (
                    <>
                      <Radi
                        active
                        id="box"
                        icon="box"
                        name="send"
                        type="repair"
                        click="step3"
                        title="KURIER"
                        value="send courier"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.send}
                        description="ODBIERZE I ODNIESIE PO WYKONIANIU USŁUGI"
                      />
                      <Radio
                        id="map"
                        name="map"
                        icon="map"
                        type="repair"
                        click="step3"
                        title="PUNKT"
                        value="send point"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.send}
                        description="DOSTARCZYSZ NAM OSOBIIŚCIE"
                        additional="FUNKCJA WYŁCZONA DO ODWOŁANIA"
                      />
                      <Radio
                        active
                        name="send"
                        type="repair"
                        click="step3"
                        id="protection"
                        title="GWARANCJE"
                        icon="protection"
                        value="send warranty"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.send}
                        description="ODBIERZEMY WEDŁUG WARUNKÓW GW"
                      />
                      <BoxError>{formik.errors.send}</BoxError>
                    </>
                  ) : (
                    <>
                      <Radio
                        active
                        id="box"
                        icon="box"
                        name="send"
                        type="repair"
                        click="step3"
                        title="KURIER"
                        value="send courier"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.send}
                        description="ODBIERZE I ODNIESIE PO WYKONIANIU USŁUGI"
                      />
                      <Radio
                        id="map"
                        name="map"
                        icon="map"
                        type="repair"
                        click="step3"
                        title="PUNKT"
                        value="send point"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.send}
                        description="DOSTARCZYSZ NAM OSOBIIŚCIE"
                        additional="FUNKCJA WYŁCZONA DO ODWOŁANIA"
                      />
                      <Radio
                        active
                        name="send"
                        type="repair"
                        click="step3"
                        id="protection"
                        title="GWARANCJE"
                        icon="protection"
                        value="send warranty"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.send}
                        description="ODBIERZEMY WEDŁUG WARUNKÓW GW"
                      />
                    </>
                  )}
                </BoxElement>
              </BoxElement>
            </Box>
            <Box theme={theme} id="step3">
              <BoxElement theme={theme}>
                <BoxElement theme={theme} mobile>
                  <Step theme={theme} number={3}>
                    Idziesz jak burza ! Już konczymy:)
                  </Step>
                </BoxElement>
                <BoxAllElement theme={theme}>
                  <BoxElement theme={theme}>
                    {formik.touched.hardwareType && formik.errors.hardwareType ? (
                      <>
                        <Select
                          id="hardwareType"
                          name="hardwareType"
                          className="error"
                          selected="Co nam oddajwesz ? Wybierz... *"
                          option={["Laptop", "PC", "Tablet", "Smartfon"]}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.hardwareType}
                        />
                        <BoxError>{formik.errors.hardwareType}</BoxError>
                      </>
                    ) : (
                      <>
                        <Select
                          id="hardwareType"
                          name="hardwareType"
                          selected="Co nam oddajwesz ? Wybierz... *"
                          option={["Laptop", "PC", "Tablet", "Smartfon"]}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.hardwareType}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme}>
                    {formik.touched.message && formik.errors.message ? (
                      <>
                        <TextArea
                          id="message"
                          name="message"
                          className="error"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          placeholder="Opisz krótko jak doszło do uszkodzenia i jakie są objawy *"
                        />
                        <BoxError>{formik.errors.message}</BoxError>
                      </>
                    ) : (
                      <>
                        <TextArea
                          id="message"
                          name="message"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          placeholder="Opisz krótko jak doszło do uszkodzenia i jakie są objawy *"
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme}>
                    <BoxTitle>OD KOGO MAMY ODEBRAĆ ?</BoxTitle>
                  </BoxElement>
                  <BoxElement theme={theme} size="50%" right>
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <>
                        <Input
                          type="name"
                          id="firstName"
                          name="firstName"
                          className="error"
                          placeholder="Imię *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                        />
                        <BoxError>{formik.errors.firstName}</BoxError>
                      </>
                    ) : (
                      <>
                        <Input
                          type="name"
                          id="firstName"
                          name="firstName"
                          placeholder="Imię *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme} size="50%" left>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <>
                        <Input
                          type="name"
                          id="lastName"
                          name="lastName"
                          className="error"
                          placeholder="Nazwisko *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                        />
                        <BoxError>{formik.errors.lastName}</BoxError>
                      </>
                    ) : (
                      <>
                        <Input
                          type="name"
                          id="lastName"
                          name="lastName"
                          placeholder="Nazwisko *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme} size="33.3333%" right>
                    {formik.touched.street && formik.errors.street ? (
                      <>
                        <Input
                          type="text"
                          id="street"
                          name="street"
                          className="error"
                          placeholder="Ulica *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.street}
                        />
                        <BoxError>{formik.errors.street}</BoxError>
                      </>
                    ) : (
                      <>
                        <Input
                          type="text"
                          id="street"
                          name="street"
                          placeholder="Ulica *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.street}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme} size="33.3333%" right left>
                    {formik.touched.buildingNumber && formik.errors.buildingNumber ? (
                      <>
                        <Input
                          id="buildingNumber"
                          name="buildingNumber"
                          type="text"
                          className="error"
                          placeholder="Nr Budynku *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.buildingNumber}
                        />
                        <BoxError>{formik.errors.buildingNumber}</BoxError>
                      </>
                    ) : (
                      <>
                        <Input
                          id="buildingNumber"
                          name="buildingNumber"
                          type="text"
                          placeholder="Nr Budynku *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.buildingNumber}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme} size="33.3333%" left>
                    {formik.touched.apartmentNumber && formik.errors.apartmentNumber ? (
                      <>
                        <Input
                          id="apartmentNumber"
                          name="apartmentNumber"
                          type="text"
                          className="error"
                          placeholder="Nr lokalu"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.apartmentNumber}
                        />
                        <BoxError>{formik.errors.apartmentNumber}</BoxError>
                      </>
                    ) : (
                      <>
                        <Input
                          id="apartmentNumber"
                          name="apartmentNumber"
                          type="text"
                          placeholder="Nr lokalu"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.apartmentNumber}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme} size="66.3333%" right>
                    {formik.touched.city && formik.errors.city ? (
                      <>
                        <Input
                          type="text"
                          id="city"
                          name="city"
                          className="error"
                          placeholder="Miasto *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.city}
                        />
                        <BoxError>{formik.errors.city}</BoxError>
                      </>
                    ) : (
                      <>
                        <Input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="Miasto *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.city}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme} size="33.3333%" left>
                    {formik.touched.postCode && formik.errors.postCode ? (
                      <>
                        <Input
                          type="text"
                          id="postCode"
                          name="postCode"
                          className="error"
                          placeholder="Kod pocztowy *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.postCode}
                        />
                        <BoxError>{formik.errors.postCode}</BoxError>
                      </>
                    ) : (
                      <>
                        <Input
                          type="text"
                          id="postCode"
                          name="postCode"
                          placeholder="Kod pocztowy *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.postCode}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme} size="50%" right>
                    {formik.touched.tel && formik.errors.tel ? (
                      <>
                        <Input
                          id="tel"
                          name="tel"
                          type="tel"
                          className="error"
                          placeholder="Twój nr. telefonu *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.tel}
                        />
                        <BoxError>{formik.errors.tel}</BoxError>
                      </>
                    ) : (
                      <>
                        <Input
                          id="tel"
                          name="tel"
                          type="tel"
                          placeholder="Twój nr. telefonu *"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          value={formik.values.tel}
                        />
                      </>
                    )}
                  </BoxElement>
                  <BoxElement theme={theme} size="50%" left>
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
                        <BoxError>{formik.errors.email}</BoxError>
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
                  </BoxElement>
                  <BoxElement>
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
                        <BoxError>{formik.errors.checkbox}</BoxError>
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
                  </BoxElement>
                  <BoxElement theme={theme}>
                    <Button submit title="Wyślij" disabled={!(formik.isValid && formik.dirty)} />
                  </BoxElement>
                </BoxAllElement>
                <BoxTag theme={theme}>
                  <BoxTagPkt>#Szybka wycena naprawy</BoxTagPkt>
                  <BoxTagPkt>#Darmowa wycena naprawy</BoxTagPkt>
                  <BoxTagPkt>#Wszystko bez zobowiązań</BoxTagPkt>
                </BoxTag>
              </BoxElement>
            </Box>
          </form>
        </Row>
      </Section>
    </>
  )
}

// EXPORT NEW COMPONENT
export default SectionReapairComponent
