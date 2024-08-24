import obd

def clean_errors(port):
    connection = obd.OBD(port) # type: ignore
    isConnected = connection.is_connected()
    if(isConnected):
        dtc_list = connection.query(obd.commands.GET_DTC) # type: ignore
        if dtc_list.is_null():
            print("No DTCs found.\n")
        else:
            for dtc in dtc_list.value:
                connection.query(obd.commands.CLEAR_DTC) # type: ignore
                print("DTCs cleared.\n")
        
    else:
        print('No connection established. Please check OBD connection first.')
    
