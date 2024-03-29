import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

import React from "react";
import { ModelsEAB } from "../api/eab/api";

import { modalTheme } from "./theme";
import { Config } from "./config";

export class RecommendedConfigurationsComponent extends React.Component<{ token: ModelsEAB | undefined; onClose: () => void }> {

    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(props: { token: ModelsEAB | undefined; onClose: () => void }) {
        super(props);
        this.state = {
            token: this.props.token,
        };
    }

    render() {
        const id = this.props.token?.id ? this.props.token?.id : "";
        const key_bytes = this.props.token?.key_bytes ? this.props.token?.key_bytes : "";

        const register_acme_sh = `acme.sh --register-account \\
    --server ${Config.AcmeHost}/acme/acme/directory \\
    --email noreply@hm.edu \\
    --eab-kid "${id}" \\
    --eab-hmac-key "${key_bytes}"`;

        const issue_acme_sh = `acme.sh --issue \\
    --standalone --days 300 \\
    --keylength ec-256 \\
    --server ${Config.AcmeHost}/acme/acme/directory \\
    -d dummy.hm.edu`;

        const certbot = `certbot certonly \\
    --standalone --non-interactive --agree-tos --email noreply@hm.edu \\
    --server ${Config.AcmeHost}/acme/acme/directory  \\
    --key-type ecdsa \\
    --eab-kid ${id} \\
    --eab-hmac-key ${key_bytes} \\
    --issuance-timeout 300 \\
    --domains dummy.hm.edu `;

        return <Modal open={this.props.token != undefined} onClose={() => { this.props.onClose(); }} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
            <Box sx={{ ...modalTheme, width: 1000 }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Empfohlene Konfigurationen
                </Typography>
                <Box sx={{ height: 680 }}>
                    {(this.props.token?.key_bytes == undefined || this.props.token.key_bytes == "" || this.props.token.bound_at) && <Alert severity="warning">Account bereits registriert!</Alert>}
                    Registrierung acme.sh
                    <pre>
                        <code style={{ width: "100%", display: "inline-block" }}> {register_acme_sh} </code>
                    </pre>
                    Zertifikatsbezug acme.sh
                    <pre>
                        <code style={{ width: "100%", display: "inline-block" }}> {issue_acme_sh} </code>
                    </pre>
                    Zertifikatsbezug certbot (ab Version 2.0)
                    <pre>
                        <code style={{ width: "100%", display: "inline-block" }}> {certbot} </code>
                    </pre>
                </Box>
            </Box>
        </Modal >;
    }
}
