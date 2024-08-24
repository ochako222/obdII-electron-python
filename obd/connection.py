import obd

def check_obd_connection():
    status = obd.OBD().status() # type: ignore
    return status

