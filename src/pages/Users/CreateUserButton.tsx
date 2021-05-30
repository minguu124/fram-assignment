import { get } from "lodash";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "src/components/Modal";
import { ICreateUser } from "src/types/user.type";
import { validateEmail } from "src/utils/validation";

interface CreateUserButtonProps {
  onCreate: (_: ICreateUser) => void;
}

const INIT = {
  name: "",
  email: "",
  position: ""
};

const CreateUserButton = ({ onCreate }: CreateUserButtonProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<ICreateUser>(INIT);
  const [invalid, setInvalid] = useState<any>({});

  const onValidate = useCallback((value: string, prop: string) => {
    if (!value) return setInvalid((x: any) => ({ ...x, [prop]: true }));
    if (prop === "email")
      return setInvalid((x: any) => ({ ...x, [prop]: !validateEmail(value) }));
    setInvalid((x: any) => ({ ...x, [prop]: false }));
  }, []);

  const isInvalid = useMemo(
    () =>
      Object.values(data).some((x) => !x) ||
      Object.values(invalid).includes(true),
    [data, invalid]
  );

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  const open = useCallback(() => {
    setVisible(true);
  }, []);

  const onPrimary = useCallback(() => {
    close();
    onCreate(data);
    setData(INIT);
    setInvalid({});
  }, [close, data, onCreate]);

  const onChangeValue = useCallback(
    (e: any, prop: string) => {
      const value = get(e, "target.value");
      onValidate(value, prop);
      setData((x) => ({ ...x, [prop]: value }));
    },
    [onValidate]
  );

  return (
    <Fragment>
      <Button onClick={open} variant="primary" className="table-btn">
        New employee
      </Button>
      <Modal
        title={"Create new employee"}
        show={visible}
        onHide={close}
        onSecondary={close}
        onPrimary={onPrimary}
        disabled={isInvalid}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formGroupFullName">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              value={data["name"]}
              onChange={(e) => onChangeValue(e, "name")}
              type="text"
              placeholder="Jon Doe"
              isInvalid={!!invalid["name"]}
            />
            <Form.Control.Feedback type="invalid">
              Name is required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={data["email"]}
              onChange={(e) => onChangeValue(e, "email")}
              type="email"
              placeholder="example@domain.com"
              isInvalid={!!invalid["email"]}
            />
            <Form.Control.Feedback type="invalid">
              Invalid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPosition">
            <Form.Label>Position</Form.Label>
            <Form.Control
              value={data["position"]}
              onChange={(e) => onChangeValue(e, "position")}
              type="text"
              placeholder="Team Leader"
              isInvalid={!!invalid["position"]}
            />
            <Form.Control.Feedback type="invalid">
              Position is required
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default CreateUserButton;
