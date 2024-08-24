import sys

from connection import check_obd_connection
from errors_cleaner import clean_errors
from errors_reader import read_errors

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