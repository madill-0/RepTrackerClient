import React, { useState, useEffect } from 'react';
import {
  Pressable, Text, TextInput, StyleSheet, View,
} from 'react-native';

export interface FieldDef {
    id: string;
    label: string;
    inputProps?: any;
  }

export interface FormProps {
    fieldDefs: FieldDef[];
    onSubmit: any;
}

const Form = ({ fieldDefs, onSubmit }: FormProps) => {
  const initialFormValues = Object.assign({}, ...fieldDefs.map((f) => ({ [f.id]: '' })));

  const [formValues, setFormValues] = useState(initialFormValues);

  const onInput = (key: string, value: string) => {
    const newFormValues = { ...formValues, [key]: value };
    setFormValues(newFormValues);
  };

  useEffect(() => {
    console.log('Vals inside useEffect: ', formValues);
  }, [formValues]);

  return (
    <View style={styles.form}>
      {fieldDefs.map((f) => <Field key={f.id} id={f.id} label={f.label} value="" inputProps={f.inputProps} onValueChange={onInput} />)}
      <Pressable style={styles.button} onPress={() => onSubmit(formValues)}>
        <Text style={styles.label}>Log In</Text>
      </Pressable>
    </View>
  );
};

interface FieldProps {
    id: string;
    label: string;
    value: string;
    inputProps?: any;
    onValueChange(key: string, value: string) : void;
}

function Field({
  id, label, value, inputProps, onValueChange,
}: FieldProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...inputProps}
        style={styles.input}
        onChangeText={(text) => onValueChange(id, text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 5,
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Avenir-Book',
  },
  input: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 5,
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  },
  label: {
    color: 'white',
    fontSize: 25,
    margin: 5,
    fontFamily: 'Avenir-Book',
  },
  inputContainer: {
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },

});

export default Form;
