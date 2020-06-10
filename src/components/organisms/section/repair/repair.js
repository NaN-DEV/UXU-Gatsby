// IMPORT PLUGIN
import React from "react"

// IMPORT SETTINGS STYLE
import theme from "../../../../layouts/settings"

// IMPORT COMPONENT START
import Row from "../../../atoms/row/row"
import Form from "../../../molecules/form/form"

// IMPORT STYLES
import { Section } from "./style/style"

// CREATE NEW COMPONENT

const SectionReapairComponent = props => {
  const { children } = props
  const formRepair = [
    {
      id: "step1",
      header: {
        number: 1,
        title: "Co możemy dla Ciebie zrobić ?",
      },
      height: "50vh",
      box: [
        {
          radio: {
            type: "repair",
            click: "step2",
            name: "service",
            option: [
              {
                id: "tools",
                active: true,
                icon: "tools",
                type: "repair",
                title: "DOKONAĆ NAPRAWY",
                description: "NAPRAWIMY TWÓJ KOMPUTER , TELEFON ETC.",
              },
              {
                id: "rocket",
                active: true,
                icon: "rocket",
                type: "repair",
                title: "DOKONAĆ TUNINGU",
                description: "ULEPSZYMY TWOJ KOMPUTER ETC.",
              },
              {
                id: "ask",
                icon: "ask",
                active: true,
                type: "repair",
                title: "INNE",
                description: "JEŻELI TWÓJ PROBLEM NIE PASUJE DO RESZTY",
              },
            ],
          },
        },
      ],
    },
    {
      id: "step2",
      header: {
        number: 2,
        title: "Jak nam dostarczysz sprzęt ?",
      },
      height: "100vh",
      box: [
        {
          radio: {
            click: "step3",
            name: "send",
            type: "repair",
            option: [
              {
                id: "box",
                icon: "box",
                active: true,
                type: "repair",
                title: "KURIER",
                description: "ODBIERZE I ODNIESIE PO WYKONANIU USŁUGI",
              },
              {
                id: "map",
                icon: "map",
                active: false,
                type: "repair",
                title: "PUNKT",
                description: "DOSTARCZYSZ NAM OSOBIŚCIE",
                additional: "FUNKCJA WYŁĄCZONA DO ODWOŁANIA",
              },
              {
                id: "protection",
                active: true,
                icon: "protection",
                type: "repair",
                title: "GWARANCJE",
                description: "ODBIERAMY SPRZĘT WEDŁUG WARUNKÓW GW",
              },
            ],
          },
        },
      ],
    },

    {
      id: "step3",
      header: {
        number: 3,
        title: "Idziesz jak burza ! Już konczymy:)",
      },
      height: "100vh",
      tag: ["Szybka wycena naprawy", "Darmowa wycena naprawy", "Wszystko bez zobowiązań"],
      box: [
        {
          select: {
            type: "selected",
            selected: "Co dajesz nam do naprawy ? Wybierz…",
            option: ["Laptop", "PC", "Tablet", "Smartfon"],
          },
        },
        { textarea: { placeholder: "Opisz którko jak doszło do uszkodzenia i co się stało ?" } },
        { title: "OD KOGO MAMY ODEBRAĆ ?" },
        { input: { type: "text", placeholder: "Imię", size: "50%", paddingRight: "1.5rem" } },
        { input: { type: "text", placeholder: "Nazwisko", size: "50%", paddingLeft: "1.5rem" } },
        { input: { type: "text", placeholder: "Ulica", size: "50%", paddingRight: "1.5rem" } },
        {
          input: { type: "number", placeholder: "Nr Budynku", size: "25%", paddingLeft: "1.5rem" },
        },
        {
          input: {
            size: "25%",
            type: "number",
            paddingLeft: "1.5rem",
            placeholder: "Nr Mieszkania",
          },
        },
        { input: { type: "text", placeholder: "Miasto", size: "50%", paddingRight: "1.5rem" } },
        {
          input: { type: "text", placeholder: "Kod pocztowy", size: "50%", paddingLeft: "1.5rem" },
        },

        { input: { type: "tel", placeholder: "Telefon", size: "50%", paddingRight: "1.5rem" } },
        {
          input: { type: "text", placeholder: "Mail", size: "50%", paddingLeft: "1.5rem" },
        },
        {
          info:
            "UXU potrzebuje twoich danych kontaktowych na czas odpowiedzi na twoje pytanie. Dodatkowo masz prawo zrezygnować z przetwarzania twoich danych w dowolnym momencie, więcej na ten temat znajdziesz w naszej polityce prywatności",
        },
        { button: { title: "wyślij" } },
      ],
    },
  ]

  return (
    <>
      <Section theme={theme}>
        <Row className="row">
          <Form items={formRepair} />
        </Row>
      </Section>
    </>
  )
}

// EXPORT NEW COMPONENT
export default SectionReapairComponent
