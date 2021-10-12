import React, { useState, useEffect } from 'react';
import { Button, Header, Container, Divider, Message, Checkbox, Form } from 'semantic-ui-react'
import { Form as VForm, Input as VInput, Dropdown as VDropdown  } from 'semantic-ui-react-form-validator'

const passenger = {
    snilsOrCSM: "",
    secondName: "",
    firstName: "",
    thirdName: "",
    gender: "",
    dateOfBirth: "",
    citizen: "",
    documentType: "",
    documentId: "",
    offer: "",
    isAgreedtoNotification: false,
    phoneNumber: "",
    passengerEmail: ""
}

const Passengers = (props) => {
    const {success, error} = props
    
    const [inputFields, setInputFields] = useState([])
    useEffect(() => {
        setInputFields([passenger])
    },[])
    
    const handleAddForm = () => {
        setInputFields([...inputFields, {...passenger} ]);
    };

    const handleRemoveForm = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleChange = (index, data) => {
        setInputFields((prevState) => {
            prevState[index] = { ...prevState[index], [data.name]: data.value ?? data.checked }
            return [...prevState]
          })
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(inputFields)
        setInputFields([passenger])
    };

    return (
        <Container text>
            <VForm onSubmit={handleSubmit}>
                {inputFields.map((e, index) => (
                    <div key={e + index} style={{ textAlign: 'right' }}>
                        {index > 0 && <Divider />}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Header size='huge'>Пассажир № {index + 1}</Header>
                            {inputFields.length > 1 && <Button type='button' onClick={handleRemoveForm} negative style={{ marginBottom: '1em' }}>Удалить пассажира</Button>}
                        </div>
                        <div style={{ textAlign: 'left' }} >

                            <VInput
                                label="СНИЛС или номер регистрации ЦСМ"
                                name="snilsOrCSM"
                                width={16}
                                onChange={(_, data) => handleChange(index, data)}
                                value={e.snilsOrCSM}
                            />
                            
                            <Form.Group>
                                <VInput
                                    label="Фамилия *"
                                    name="secondName"
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    width={16}
                                    value={e.secondName}
                                    onChange={(_, data) => handleChange(index, data)}
                                />
                                <VInput
                                    label="Имя *"
                                    name="firstName"
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    width={16}
                                    value={e.firstName}
                                    onChange={(_, data) => handleChange(index, data)}
                                />

                                <VInput
                                    label="Отчество *"
                                    name="thirdName"
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    width={16}
                                    value={e.thirdName}
                                    onChange={(_, data) => handleChange(index, data)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <VDropdown
                                    label='Пол *'
                                    selection
                                    placeholder='не выбрано'
                                    width={16}
                                    onChange={(_, data) => handleChange(index, data)}
                                    name="gender"
                                    value={inputFields[index].gender}
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    options={[
                                        { key: "m", text: "Муж", value: "male" },
                                        { key: "f", text: "Женск", value: "female" }
                                    ]}
                                />
                                <VInput
                                    label="Дата рождения *"
                                    name="dateOfBirth"
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    width={16}
                                    onChange={(_, data) => handleChange(index, data)}
                                    value={e.dateOfBirth}
                                    type='number'

                                />
                                <VDropdown
                                    label='Гражданство *'
                                    selection
                                    placeholder='не выбрано'
                                    width={16}
                                    onChange={(_, data) => handleChange(index, data)}
                                    name="citizen"
                                    value={inputFields[index].citizen}
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    options={[
                                        { key: "russia", text: "Россия", value: "russia" },
                                        { key: "ukraine", text: "Украина", value: "ukraine"}
                                    ]}

                                />
                            </Form.Group>
                            <Form.Group>
                                <VDropdown
                                    label='Тип документа *'
                                    id='documentType'
                                    selection
                                    placeholder='не выбрано'
                                    width={16}
                                    onChange={(_, data) => handleChange(index, data)}
                                    name="documentType"
                                    value={inputFields[index].documentType}
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    options={[
                                        { key: "pasp", text: "Паспорт РФ", value: "pasp"}
                                    ]}

                                />
                                <VInput
                                    label="Номер документа *"
                                    name="documentId"
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    width={16}
                                    value={e.documentId}
                                    onChange={(_, data) => handleChange(index, data)}
                                    type='number'
                                />
                                <VDropdown
                                    label='Тариф *'
                                    selection
                                    placeholder='не выбрано'
                                    width={16}
                                    onChange={(_, data) => handleChange(index, data)}
                                    name="offer"
                                    value={inputFields[index].offer}
                                    validators={['required']}
                                    errorMessages={['Обязательное поле']}
                                    options={[
                                        { key: "offer1", text: "Тариф 1", value: "offer1" }
                                    ]}
                                />
                            </Form.Group>
                            <Divider/>
                            <Checkbox
                                label='Согласен на получение оповещений в случаях чрезвычайных ситуаций на железнодорожном транспорте.'
                                name="isAgreedtoNotification"
                                onChange={(_, data) => handleChange(index, data)}
                            />
                            <p>Если вы хотите получать оповещения об изменении вашего поезда в случае чрезвычайной ситуации, укажите пожалуста, e-mail и/или телефон пассажира.</p>
                            <p>Если вы не хотите получать оповещения - снимите галочку согласия на оповещения</p>
                            <Form.Group>

                                <VInput
                                    label="Номер телефона"
                                    name="phoneNumber"
                                    value={e.phoneNumber}
                                    onChange={(_, data) => handleChange(index, data)}
                                    type='number'
                                />
                                <VInput
                                    label="E-mail пассажира"
                                    name="passengerEmail"
                                    value={e.passengerEmail}
                                    onChange={(_, data) => handleChange(index, data)}
                                    
                                />
                            </Form.Group>
                        </div>
                        <Button type='button' onClick={handleAddForm} secondary style={{ marginTop: '1em' }}>Добавить пассажира</Button>
                    </div>
                ))}

                <Button style={{ marginTop: '1em' }} primary>Отправить</Button>
            </VForm>
            {props.error ? <Message error>Status sumbit: {props.error}</Message> : 
            props.success ? <Message success>Status sumbit: {props.success}</Message> : null}
        </Container>
    )
}

export default Passengers;