const Test = () => {
  return (
    <div className="surface-card p-4 shadow-2 border-round">
      <div className="font-medium text-3xl text-900 mb-3">
        Applicant Profile
      </div>
      <div className="text-500 mb-5">
        Egestas sed tempus urna et pharetra pharetra massa massa ultricies.
      </div>
      <ul className="list-none p-0 m-0 border-top-1 surface-border">
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
          <div className="text-500 w-full md:w-2 font-medium">Name</div>
          <div className="text-900 w-full md:w-10">Elliot Alderson</div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap">
          <div className="text-500 w-full md:w-2 font-medium">Bio</div>
          <div className="text-900 w-full md:w-10 line-height-3">
            Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt
            vitae. Commodo odio aenean sed adipiscing diam donec adipiscing
            tristique. Eget felis eget nunc lobortis mattis aliquam faucibus
            purus in.
          </div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
          <div className="text-500 w-full md:w-2 font-medium">
            Salary Expectation
          </div>
          <div className="text-900 w-full md:w-10">$150,000</div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap">
          <div className="text-500 w-full md:w-2 font-medium">Skills</div>
          <div className="text-900 w-full md:w-10">
            {/* <Tag className="mr-2" value="Algorithms" rounded />
            <Tag
              className="mr-2"
              severity="success"
              value="Javascript"
              rounded
            />
            <Tag className="mr-2" severity="danger" value="Python" rounded />
            <Tag severity="warning" value="SQL" rounded /> */}
          </div>
        </li>
        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
          <div className="text-500 w-full md:w-2 font-medium">Repositories</div>
          <div className="text-900 w-full md:w-10">
            <div className="grid mt-0 mr-0">
              <div className="col-12 md:col-6">
                <div className="p-3 border-1 surface-border border-round surface-card">
                  <div className="text-900 mb-2">
                    <i className="pi pi-github mr-2"></i>
                    <span className="font-medium">PrimeFaces</span>
                  </div>
                  <div className="text-700">
                    Ultimate UI Component Suite for JavaServer Faces
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="p-3 border-1 surface-border border-round surface-card">
                  <div className="text-900 mb-2">
                    <i className="pi pi-github mr-2"></i>
                    <span className="font-medium">PrimeNG</span>
                  </div>
                  <div className="text-700">
                    The Most Complete Angular UI Component Library
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="p-3 border-1 surface-border border-round surface-card">
                  <div className="text-900 mb-2">
                    <i className="pi pi-github mr-2"></i>
                    <span className="font-medium">PrimeReact</span>
                  </div>
                  <div className="text-700">
                    Advanced UI Components for ReactJS
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6">
                <div className="p-3 border-1 surface-border border-round surface-card">
                  <div className="text-900 mb-2">
                    <i className="pi pi-github mr-2"></i>
                    <span className="font-medium">PrimeVue</span>
                  </div>
                  <div className="text-700">
                    The Most Powerful Vue UI Component Library
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Test;
