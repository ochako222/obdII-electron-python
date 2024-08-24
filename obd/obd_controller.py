import sys
import obd

def check_obd_connection():
    status = obd.OBD().status()
    return 'connected'

def read_errors():
    return 'you have a lot of errors!'
    
def clean_errors():
    return 'all errors cleaned!'
    
def main():
    if len(sys.argv) > 1:
        if sys.argv[1] == "check_obd_connection":
            print(check_obd_connection())
        elif sys.argv[1] == "read_errors":
            print(read_errors())
        elif sys.argv[1] == "clean_errors":
            print(clean_errors())
    else:
        print("No valid command provided.")

if __name__ == "__main__":
    main()