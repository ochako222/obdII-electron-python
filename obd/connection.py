import obd

def check_obd_connection():
    ports = obd.scan_serial() # type: ignore
    port_to_connect = ports[len(ports)-1]
    return port_to_connect

