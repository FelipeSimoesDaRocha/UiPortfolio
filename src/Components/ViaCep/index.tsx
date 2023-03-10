import React, { useState } from 'react'

// Styles
import { Container } from './styles'

// Antd
import { Form } from 'antd'

// Mask
import MaskedInput from 'antd-mask-input'

// Api
import { getAddress } from 'services/api'

// Models
import { Address, iProps } from 'models'
import { toast } from 'react-toastify'


export type { Address }

const CepInput: React.FC<iProps> = ({ name, label, initialValue, required, onGetCep }) => {
  const [loading, setLoading] = useState(false)

  const unmaskedCep = value => value && String(value).replace(/[^0-9]/g, '')

  const [cep, setCep] = useState(unmaskedCep(initialValue))

  const fetchCep = async cep => {
    try {
      setLoading(true)

      const response = await getAddress(cep)

      if (response.data.erro) {
        throw Error('O CEP informado é inválido')
      }

      setCep(cep)

      if (onGetCep) {
        onGetCep(response.data)
      }

      return Promise.resolve()
    } catch (error) {
      setCep(undefined)
      toast.error(`Um erro inesperado aconteceu`)
    } finally {
      setLoading(false)
    }
  }

  const isValidCep = value => {
    const cepValue = unmaskedCep(value)

    if (!cepValue || cepValue.length !== 8) {
      return Promise.reject('O CEP informado é inválido')
    }

    if (cep !== cepValue) {
      return fetchCep(cepValue)
    }

    return Promise.resolve()
  }

  return (
    <Container>
      <Form.Item
        name={name}
        label={label}
        initialValue={initialValue}
        hasFeedback
        validateStatus={loading ? 'validating' : ''}
        validateTrigger={['onChange', 'onFinish']}
        rules={[
          {
            required,
            validator: (_, value) => isValidCep(value)
          }
        ]}
      >
        <MaskedInput mask="00000-000" className="MaskedInput" />
      </Form.Item>
    </Container>
  )
}

CepInput.defaultProps = {
  required: true
}

export default CepInput
